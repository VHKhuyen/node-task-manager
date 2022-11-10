const taskRouter = require("./tasks");
const catRouter = require("./cat");

const route = (app) => {
  app.use("/api/v1/tasks", taskRouter);
  app.use("/api/v1/catsss", catRouter);
  app.all("*", (req, res) => {
    res.status(404).send("Not found!");
  });
};
module.exports = route;
