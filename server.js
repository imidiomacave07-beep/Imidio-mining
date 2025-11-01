const express = require('express');
const app = express();
const PORT = 10000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
