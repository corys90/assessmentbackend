const player = require("./api/player");
const authLocal = require("./auth/local");

function routes(app) {
  app.use("/api/favs", player);
  app.use("/auth/local/login", authLocal);
}

module.exports = routes;
