// Servidor básico Node.js (Express) para Render
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Página inicial
app.get("/", (req, res) => {
  res.send("🚀 Imidio Mining está online e a funcionar corretamente!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
