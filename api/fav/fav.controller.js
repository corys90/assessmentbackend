
const { getListFavorites, createList, getListById, delListById, addItemListById } = require("../fav/fav.service");

// Controladora de endpoint GET /api/favs que devuelve lista de fav de un usuario
function controllerGetAllList(req, res) {

    const favs = await getListFavorites();
    res.status(200).json(favs);

}

  // Controladora de endpoint POST /api/favs que inserta una lista de fav de un usuario
function controllerPostNewList(req, res) {

    if (!req.body.name || !req.body.favList || !req.body.id_user){
        return res
        .status(400)
        .json({ status: 400, message: "Falta alguno de los campos name, favList o id_user" });
    }else{
        const listCreated = await createList(req.body);
        return res.status(201).json(listCreated);
    }
}
  
  // Controladora de endpoint GET /api/favs/:id que devuelve lista de fav de un usuario según id
function controllerGetSingleList(req, res) {

    if (!req.params.id){
        const lista = await getListById(req.params.id);
        return res.status(200).json({status: 200, message: "Success", lista });
    }else{
        return res.status(404).json({ status: 404, message: "Se requiere id de la lista" });
    }
}
  
  // Controladora de endpoint DELETE /api/favs/:id que elimina una lista de fav segun id
function controllerDeletesSingleList(req, res) {
    if (!req.params.id){
        const lista = await delListById(req.params.id);
        return res.status(200).json({status: 200, message: "Success", lista });
    }else{
        return res.status(404).json({ status: 404, message: "Se requiere id de la lista" });
    }
}

// Controladora de endpoint POST /api/favs/additem/:id que inserta un artículo a una lista según id
function controllerPostAddItemList(req, res) {
    if (!req.body.idList || !req.body.title || !req.body.description || !req.body.link){
        const lista = await addItemListById(req.body);
        return res.status(200).json({status: 200, message: "Success", lista });
    }else{
        return res.status(404).json({ status: 404, message: "Se requiere idList, title, description y link" });
    }
}


module.exports = {
    controllerGetAllList,
    controllerGetSingleList,
    controllerDeletesSingleList,
    controllerPostNewList,
    controllerPostAddItemList,
  };