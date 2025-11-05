const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware para JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor Imidio Mining funcionando! 🚀');
});

// Rota de status
app.get('/status', (req, res) => {
  res.json({ status: 'online', time: new Date() });
});

// 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
