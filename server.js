const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Página de teste para verificar se o servidor responde
app.get('/teste', (req, res) => {
  res.send('🚀 Servidor funcionando perfeitamente no Render!');
});

// Inicializa o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
