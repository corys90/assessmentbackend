const { Router } = require("express");
const { controllerGetAllList, 
    controllerPostNewList, 
    controllerGetSingleList, 
    controllerDeletesSingleList,
    controllerPostAddItemList, 
} = require("./fav.controller");

const { isAuthenticated } = require("../../auth/auth.services");

const router = Router();

router.get("/", isAuthenticated, controllerGetAllList); // Obtiene la lsta de favoritos de toda la BD
router.post("/", isAuthenticated, controllerPostNewList); // crea un alista con los articulos favoritos de un usuario
router.post("/additem", isAuthenticated, controllerPostAddItemList); // Añada un articulo a la lista favoritos especificada
router.get("/:id", isAuthenticated, controllerGetSingleList); // Obtiene una lista de favoritos específica
router.delete("/:id", isAuthenticated, controllerDeletesSingleList); // Borra una lista de favoritos especificada

module.exports = router;