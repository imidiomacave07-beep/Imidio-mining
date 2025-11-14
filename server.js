const express = require("express");
const path = require("path");
const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const app = express();

// ----------------------------
// START DATABASE
// ----------------------------
const dbFile = path.join(__dirname, "database.json");
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

// Função para iniciar o banco
async function startDatabase() {
  await db.read();
  db.data ||= { users: [], mining: [] }; // cria estrutura inicial
  await db.write();
  console.log("📁 Database iniciado com sucesso");
}

startDatabase();
// ----------------------------


// Middleware para ler JSON
app.use(express.json());

// Servir arquivos estáticos da pasta PUBLIC
app.use(express.static(path.join(__dirname, "public")));

// Rota principal (home)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Exemplo de rota API (opcional)
app.get("/api/status", (req, res) => {
  res.json({ status: "Servidor ativo", time: new Date() });
});

// Iniciar servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
);
