const Cat = require("../models/Cat");

const getAllCats = (req, res) => {
  return res.send("all Cats!");
};

const createCat = async (req, res) => {
  const cat = await Cat.create(req.body);
  return res.status(201).json({ cat });
};

const getCat = (req, res) => {
  return res.json({ success: true, data: "one Cat!" });
};

const updateCat = (req, res) => {
  return res.json({ success: true, data: "update successfully!" });
};

const deleteCat = (req, res) => {
  return res.json({ success: true, data: "delete successfully!" });
};

module.exports = {
  getAllCats,
  createCat,
  getCat,
  updateCat,
  deleteCat,
};
