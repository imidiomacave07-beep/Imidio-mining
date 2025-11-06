const port = process.env.PORT || 10000;  // pega a porta do Render ou usa 10000 localmente
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
