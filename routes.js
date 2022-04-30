const user = require("./api/favs");
const authLocal = require("./auth/local");

function routes(app) {
  app.use("/api/favs", user);
  app.use("/auth/local", authLocal);
}

module.exports = routes;
