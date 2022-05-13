
const { getListFavorites, createList, getListById, delListById, addItemListById } = require("../fav/fav.service");

// Controladora de endpoint GET /api/favs que devuelve lista de fav de un usuario
async function controllerGetAllList(req, res) {

    const favs = await getListFavorites();
    res.status(200).json(favs);

}

  // Controladora de endpoint POST /api/favs que inserta una lista de fav de un usuario
async function controllerPostNewList(req, res) {
    console.log("Crea lista con : ", req.body)
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
  async function controllerGetSingleList(req, res) {
    console.log("Ver lista: ", req.params.id);
    if (req.params.id){
        const lista = await getListById(req.params.id);
        if (lista.status === 200){
            const item = lista.item;
            return res.status(200).json({status: 201, message: "Success",  item});
        }else{
            return res.status(404).json({status: 404, message: "Lista no existe "});
        }

    }else{
        return res.status(404).json({ status: 404, message: "Se requiere id de la lista" });
    }
}
  
  // Controladora de endpoint DELETE /api/favs/:id que elimina una lista de fav segun id
  async function controllerDeletesSingleList(req, res) {
    console.log("Lista a Borrar: ", req.params.id);
    if (req.params.id){
        const lista = await delListById(req.params.id);
        console.log("Resultado: ", lista);
        if (lista.status === 200){
            return res.status(200).json({status: 200, message: "Success"});
        }else{
            return res.status(404).json({status: 404, message: "Lista no existe!!!"});
        }
    }else{
        return res.status(404).json({ status: 404, message: "Se requiere id de la lista" });
    }
}

// Controladora de endpoint POST /api/favs/additem/:id que inserta un artículo a una lista según id
async function controllerPostAddItemList(req, res) {
    if (req.body.idList && req.body.title && req.body.description && req.body.link){
        console.log("Item a añadir: ", req.body);
        const lista = await addItemListById(req.body);
        if (lista.status === 201){
            return res.status(201).json(lista);
        }else{
            return res.status(404).json(lista);    
        }
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