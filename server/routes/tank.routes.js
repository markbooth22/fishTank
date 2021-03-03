const TankController = require("../controllers/tank.controller");

module.exports = (app) => {
  app.get("/api/tanks", TankController.getAll);
  app.post("/api/tanks", TankController.create);
  app.get("/api/usertank", TankController.getOne);
  app.put("/api/tanks/:id", TankController.update);
  app.delete("/api/tanks/:id", TankController.delete);
}