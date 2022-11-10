const taskRouter = require("./tasks");
const catRouter = require("./cat");

const route = (app) => {
  app.use("/api/v1/tasks", taskRouter);
  app.use("/api/v1/catsss", catRouter);
};
module.exports = route;
