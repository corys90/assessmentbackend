const { Router } = require("express");
const controllers = require("./user.controller");

const router = Router();

router.get("/", controllers.controllerGetAllList); //
router.post("/createuser", controllers.controllerPostCreateNewUser); // Crea usuarios
router.post("/", controllers.controllerPostNewList);
router.get("/:id", controllers.controllerGetSingleList);
router.delete("/:id", controllers.controllerDeletesSingleList);

module.exports = router;
