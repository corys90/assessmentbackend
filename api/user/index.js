const { Router } = require("express");
const controllers = require("./user.controller");

const router = Router();

router.post("/createuser", controllers.controllerPostCreateNewUser); // Crea usuarios

module.exports = router;
