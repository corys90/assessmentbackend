const { Router } = require("express");
const { controllerGetAllList, 
    controllerPostNewList, 
    controllerGetSingleList, 
    controllerDeletesSingleList,
    controllerPostAddItemList, 
} = require("./fav.controller");

//const { isAuthenticated } = require("../../auth/auth.services");

const router = Router();

router.get("/",  controllerGetAllList); // Obtiene la lista de favoritos de toda la BD
router.post("/",  controllerPostNewList); // crea un alista con los articulos favoritos de un usuario
router.post("/additem",  controllerPostAddItemList); // Añada un articulo a la lista favoritos especificada
router.get("/:id",  controllerGetSingleList); // Obtiene una lista de favoritos específica
router.delete("/:id",  controllerDeletesSingleList); // Borra una lista de favoritos especificada

module.exports = router;