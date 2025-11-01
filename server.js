const express = require('express');
const app = express();
const PORT = 10000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Definir rota raiz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
