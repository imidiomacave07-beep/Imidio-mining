const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Qualquer rota inválida redireciona para a home
app.get('*', (req, res) => {
  res.redirect('/');
});

// Iniciar servidor
const port = process.env.PORT || 10000; // ou a porta que você configurou no Render
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
