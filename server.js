const express = require('express');
const path = require('path');
const app = express();

// Define o motor de templates (opcional, caso uses EJS)
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota da Home — ESSA É A CHAVE!
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
