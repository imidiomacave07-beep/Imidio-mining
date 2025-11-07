// server.js - plataforma Imidio Mining

const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos (como index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Porta (Render define automaticamente)
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}constst
