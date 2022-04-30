const { Router } = require("express");
const controllers = require("./favs.controller");

const router = Router();

router.get("/", controllerGetAllList);
router.post("/", controllerPostNewList);
router.get("/:id", controllerGetSingleList);
router.delete("/:id", controllerDeletesSingleList);
router.post("/login", controllerLogin);

module.exports = router;
