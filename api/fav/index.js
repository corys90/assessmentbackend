const { Router } = require("express");
const { controllerGetAllList, 
    controllerPostNewList, 
    controllerGetSingleList, 
    controllerDeletesSingleList,
    controllerPostAddItemList, 
} = require("./fav.controller");

const { isAuthenticated } = require("../../auth/auth.services");

const router = Router();

router.get("/", isAuthenticated, controllerGetAllList); // Obtiene la lista de favoritos de toda la BD - Ok
router.post("/", isAuthenticated, controllerPostNewList); // crea una lista con los articulos favoritos de un usuario - Ok
router.post("/additem", isAuthenticated, controllerPostAddItemList); // Añada un articulo a la lista favoritos especificada - Ok
router.get("/:id", isAuthenticated, controllerGetSingleList); // Obtiene una lista de favoritos específica - Ok
router.delete("/:id", isAuthenticated, controllerDeletesSingleList); // Borra una lista de favoritos especificada - Ok

module.exports = router;