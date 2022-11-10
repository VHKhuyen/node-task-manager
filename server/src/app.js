const express = require("express");
const cors = require("cors");
const route = require("./routes");

const app = express();
const db = require("./db/connect");
const port = 5000;

app.use(cors());

//middleware
app.use(express.json());

route(app);

//connect to database
db.connect();

app.listen(port, () => {
  console.log(`Hello World! I am run on port ${port}.`);
});
