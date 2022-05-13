const { app } = require("./app");

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}/`);
});

module.exports = app;
