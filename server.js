const express = require("express");
const path = require("path");
const app = express();

// serve arquivos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// rota padrão → envia o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
