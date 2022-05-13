const user = require("./api/user");
const fav = require("./api/fav");
const authLocal = require("./auth/local");

function routes(app) {
  app.use("/api/user", user);
  app.use("/api/fav", fav);  
  app.use("/auth/local", authLocal);
}

module.exports = routes;
