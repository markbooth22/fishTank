const UserController = require("../controllers/User.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/register", UserController.register);
  app.post("/api/login", UserController.login);
  app.post("/api/logout", UserController.logout);

  app.get("/api/users", authenticate, UserController.getAll);
  app.get("/api/users/loggedin", authenticate, UserController.getLoggedInUser);
};
