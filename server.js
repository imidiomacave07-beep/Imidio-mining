// server.js - Imidio Mining (com health check e keep-alive)
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal: envia index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check (usado por monitores/Render)
app.get('/healthz', (req, res) => {
  return res.status(200).json({ status: 'ok', time: new Date().toISOString() });
});

// Rota de teste simples
app.get('/teste', (req, res) => {
  res.send('✅ Servidor Imidio Mining ativo');
});

// KEEP-ALIVE (opcional)
// Se a variável KEEPALIVE_URL estiver definida nos env do Render, o servidor fará requisições periódicas para essa URL.
// Atenção: o Free tier do Render pode spin-down independentemente; usar um monitor externo (UptimeRobot) é mais confiável.
const KEEPALIVE_URL = process.env.KEEPALIVE_URL || null;
const KEEPALIVE_INTERVAL_MIN = Number(process.env.KEEPALIVE_INTERVAL_MIN) || 5; // em minutos

if (KEEPALIVE_URL) {
  const intervalMs = Math.max(1, KEEPALIVE_INTERVAL_MIN) * 60 * 1000;
  setInterval(async () => {
    try {
      await fetch(KEEPALIVE_URL, { method: 'GET', timeout: 10000 });
      console.log(`Keep-alive ping sent to ${KEEPALIVE_URL} at ${new Date().toISOString()}`);
    } catch (err) {
      console.warn('Keep-alive ping failed:', err.message || err);
    }
  }, intervalMs);
} else {
  console.log('KEEPALIVE_URL not set — no self-ping will run. Consider using an external monitor like UptimeRobot.');
}

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
