const { Router } = require("express");
const controllers = require("./local.controller");

const router = Router();

router.post("/login", controllers.controllerLogin);

module.exports = router;
