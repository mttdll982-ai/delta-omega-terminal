const TOKEN = "g7HkNT3XTk2vkHBHKBcYzY4b"; 
const DEPLOY_ID = "h5degks4w"; 

async function streamLogs() {
    const logContainer = document.getElementById('log-terminal');
    
    try {
        const response = await fetch(`https://api.vercel.com/v3/deployments/${DEPLOY_ID}/events?follow=1`, {
            headers: { "Authorization": `Bearer ${TOKEN}` }
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop(); 
            
            for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    const log = JSON.parse(line);
                    const el = document.createElement('p');
                    el.style.color = log.type === 'error' ? '#ff0000' : '#00ff00';
                    el.textContent = `> [${new Date(log.created).toLocaleTimeString()}] ${log.text}`;
                    logContainer.prepend(el);
                } catch (e) { }
            }
        }
    } catch (err) {
        console.error("Errore di connessione:", err);
    }
}

streamLogs();
