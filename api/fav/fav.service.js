const favoritesModel = require("./user.model");

async function getListFavorites() {
  const favs = await favoritesModel.find({});
  return favs;
}

async function createList(data) {
  const favs = await favoritesModel.create(data);
  return favs;
}

async function getListById(idList) {
  const list = await favoritesModel.findOne({ _id: idList });
  return list;
}

async function delListById(idList) {
  const list = await favoritesModel.deleteOne({ _id: idList });
  return list;
}

async function addItemListById({idList, title, description, link}) {
  const list = await getListById(idList);
  if (list){
    list.favList.push({title:title, description:description, link:link});
    return list;
  }else{
    return res.status(404).json({ status: 404, message: "La lista no está creada" });
  }
}


module.exports = { getListFavorites, createList, getListById, delListById, addItemListById}