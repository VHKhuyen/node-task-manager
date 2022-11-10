const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Cat", CatSchema);
