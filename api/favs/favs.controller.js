// llamar o requerir al service

// Controladora de endpoint GET /api/favs que devuelve lista de fav de un usuario
function controllerGetAllList(req, res) {
  res
    .status(200)
    .set("Content-Type", "application/json")
    .end("Petición recibida con GET a ruta " + JSON.stringify(req.headers));
}

// Controladora de endpoint POST /api/favs que inserta una lista de fav de un usuario
function controllerPostNewList(req, res) {
  const id = "" + Math.round(Math.random() * 100000000000000);
  req.body.id = id;
  console.log("Id: ", id);
  res
    .status(200)
    .set("Content-Type", "application/json")
    .end(JSON.stringify(req.body));
}

// Controladora de endpoint GET /api/favs/:id que devuelve lista de fav de un usuario según id
function controllerGetSingleList(req, res) {
  console.log("Id: ", req.params.id);
  res
    .status(200)
    .set("Content-Type", "text/html")
    .end(`<h1>Petición recibida con GET e ID: ${req.params.id} </h1>`);
}

// Controladora de endpoint DELETE /api/favs/:id que elimina una lista de fav segun id
function controllerDeletesSingleList(req, res) {
  console.log("Id: ", req.params.id);
  res
    .status(200)
    .set("Content-Type", "text/html")
    .end(`<h1>Petición recibida to DELETE con ID: ${req.params.id} </h1>`);
}

module.exports = {
  controllerGetAllList,
  controllerGetSingleList,
  controllerDeletesSingleList,
  controllerPostNewList,
};
