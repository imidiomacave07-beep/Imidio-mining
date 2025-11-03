// server.js — servidor principal da plataforma Imidio Mining

const express = require("express");
const path = require("path");

const app = express();

// Define a pasta "public" como pública (para servir HTML, CSS e JS)
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define a porta (Render usa process.env.PORT automaticamente)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor Imidio Mining rodando na porta ${PORT}`);
});
