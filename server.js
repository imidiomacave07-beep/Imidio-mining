const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware para JSON (caso queira receber dados via POST)
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor Imidio Mining funcionando! 🚀');
});

// Rota de teste
app.get('/status', (req, res) => {
  res.json({ status: 'online', time: new Date() });
});

// Rota para qualquer URL não definida
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
