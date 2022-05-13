const { Router } = require("express");
const {controllerPostCreateNewUser} = require("./user.controller");
const { isAuthenticated } = require("../../auth/auth.services");

const router = Router();

router.post("/createuser", isAuthenticated, controllerPostCreateNewUser); // Crea usuarios

module.exports = router;
