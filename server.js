const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

// Servir arquivos da pasta public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
