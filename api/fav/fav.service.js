const favoritesModel = require("../fav/fav.model");

async function getListFavorites() {
  const favs = await favoritesModel.find({});
  return favs;
}

async function createList(data) {
  const favs = await favoritesModel.create(data);
  return favs;
}

async function getListById(idList) {

  try {
    const item = await favoritesModel.findOne({ _id: idList });
    return ({ status: 200, item });

  } catch (error) {
    return ({ status: 404 });
  }

}

async function delListById(idList) {

  try {
    const list = await favoritesModel.deleteOne({ _id: idList });
    if (list.deletedCount > 0)
      return ({ status: 200, list });
    else
      return ({ status: 404, list });

  } catch (error) {
    return ({ status: 404 });
  }

}

async function updateList(list) {
  const lista = await favoritesModel.findByIdAndUpdate({ _id: list._id }, { $set: list })
  return lista;
}

async function addItemListById({idList, title, description, link}) {
  const list = await getListById(idList);
  if (list.status === 201){
    list.item.favList.push({title:title, description:description, link:link});
    const lUpdate = updateList(list.item);
    return ({status: 201, message: "Ítem añadido exitosamente!!!", lUpdate });
  }else{
    return ({ status: 404, message: "La lista no está creada" });
  }
}


module.exports = { getListFavorites, createList, getListById, delListById, addItemListById}