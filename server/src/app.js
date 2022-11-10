const express = require("express");
const cors = require("cors");
const route = require("./routes");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware//error-handler");

const db = require("./db/connect");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//middleware
app.use(express.json());

route(app);

app.use(notFound);
app.use(errorHandlerMiddleware);

//connect to database
db.connect();

app.listen(port, () => {
  console.log(`Hello World! I am run on port ${port}.`);
});
