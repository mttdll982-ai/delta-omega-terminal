// CONFIGURAZIONE Δ-Ω LIVE
const TOKEN = "g7HkNT3XTk2vkHBHKBcYzY4b"; // Il tuo Token API
const DEPLOY_ID = "h5degks4w"; // L'ID del tuo deployment

async function streamLogs() {
    const logContainer = document.getElementById('log-terminal');
    
    try {
        const response = await fetch(`https://api.vercel.com/v3/deployments/${DEPLOY_ID}/events?follow=1`, {
            headers: { "Authorization": `Bearer ${TOKEN}` }
        });
// ... prosegui con il resto del codice già presente
