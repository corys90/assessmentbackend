const { Router } = require("express");
const controllers = require("./favs.controller");

const router = Router();

router.get("/", controllers.controllerGetAllList);
router.post("/", controllers.controllerPostNewList);
router.get("/:id", controllers.controllerGetSingleList);
router.delete("/:id", controllers.controllerDeletesSingleList);

module.exports = router;
