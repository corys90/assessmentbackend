const { Router } = require("express");
const {controllerPostCreateNewUser} = require("./user.controller");

const router = Router();

router.post("/createuser", controllerPostCreateNewUser); // Crea usuarios

module.exports = router;
