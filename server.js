const express = require('express');
const path = require('path');
const app = express();

// Porta definida pelo Render
const PORT = process.env.PORT || 3000;

// Diga ao Express onde estão os arquivos do front-end (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal envia o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
