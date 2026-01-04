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
// CONFIGURAZIONE Δ-Ω LIVE
const TOKEN = "g7HkNT3XTk2vkHBHKBcYzY4b"; // Il tuo Token API
const DEPLOY_ID = "h5degks4w"; // L'ID del tuo deployment

async function streamLogs() {
    const logContainer = document.getElementById('log-terminal');
    
    try {
        // Handshake con i server Vercel per lo streaming real-time
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
            buffer = lines.pop(); // Mantiene l'integrità dei dati parziali
            
          const puppeteer = require('puppeteer');

async function getFullNumbers(urls) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  for (let url of urls) {
    await page.goto(url);
    // Simula il clic sul tasto "Mostra numero" o "Chiama"
    const button = await page.$('.contact-button, .show-number'); 
    if (button) {
      await button.click();
      await page.waitForTimeout(1000); // Attesa decriptazione
      const number = await page.$eval('.phone-number', el => el.innerText);
      console.log(`URL: ${url} -> Numero: ${number}`);
    }
  }
  await browser.close();
}  for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    const log = JSON.parse(line);
                    const el = document.createElement('p');
                    
                    // Verde per attività standard, Rosso per errori
                    el.style.color = log.type === 'error' ? '#ff0000' : 
                        '#00ff00';
                    el.textContent = `> [${new Date(log.created).toLocaleTimeString()}] ${log.text}`;
                    
                    logContainer.prepend(el); // Mostra l'ultimo evento in alto
                } catch (e) { /* Salta JSON frammentati */ }
            }
        }
    } catch (err) {
        console.error("Errore di connessione protocollo Δ-Ω:", err);
    }
}

// Inizializzazione
streamLogs();
// CONFIGURAZIONE Δ-Ω LIVE
const TOKEN = "g7HkNT3XTk2vkHBHKBcYzY4b"; 
const DEPLOY_ID = "h5degks4w"; 

// 1. Funzione per sbloccare i numeri (Backend Call)
async function sbloccaNumeri(listaUrl) {
    const logContainer = document.getElementById('log-terminal');
    const statusEl = document.createElement('p');
    statusEl.style.color = '#ffff00';
    statusEl.textContent = "> [SISTEMA] Avvio bypass protocollo di oscuramento...";
    logContainer.prepend(statusEl);

    try {
        const response = await fetch('/api/extract', {
            method: 'POST',
            body: JSON.stringify({ targetUrls: listaUrl })
        });
        const result = await response.json();
        
        if (result.success) {
            result.data.forEach(item => {
                const el = document.createElement('p');
                el.style.color = '#00ff00';
                el.textContent = `> ESTRATTO: ${item.url} -> NUMERO: ${item.phone}`;
                logContainer.prepend(el);
            });
        }
    } catch (e) {
        console.error("Errore di estrazione:", e);
    }
}

// 2. Listener per i log in tempo reale
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
    } catch (err) { }
}

streamLogs();
