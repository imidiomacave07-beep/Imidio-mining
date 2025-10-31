// server.js
const express = require('express');
const app = express();
const port = 10000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota raiz: envia o index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Simulação de atualização de ganhos (exemplo)
let users = [
  { id: 1, name: 'Imidio', balance: 112, plan: 'Bronze', rate: 0.02 },
  { id: 2, name: 'Valina', balance: 220, plan: 'Silver', rate: 0.05 }
];

setInterval(() => {
  users = users.map(user => ({
    ...user,
    balance: +(user.balance * (1 + user.rate)).toFixed(4)
  }));
  console.log('💸 Ganhos atualizados:', users);
}, 60000); // Atualiza a cada 1 minuto (60.000 ms)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
