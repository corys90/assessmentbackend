// Controladora de endpoint POST /api/favs que inserta una lista de fav de un usuario
function controllerLogin(req, res) {
  res
    .status(200)
    .set("Content-Type", "application/json")
    .end(`Devuelvo lo recibido : ${JSON.stringify(req.body)}`);
}

module.exports = { controllerLogin };
