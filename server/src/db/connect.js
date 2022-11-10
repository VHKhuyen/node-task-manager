const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database successfully!");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
