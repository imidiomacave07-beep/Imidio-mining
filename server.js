const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

// Indica que a pasta "public" tem os arquivos do site
app.use(express.static(path.join(__dirname, "public")));

// Rota padrão: envia o index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
