const express = require("express");
const router = express.Router();

const {
  getAllCats,
  createCat,
  getCat,
  updateCat,
  deleteCat,
} = require("../controllers/CatsController");

router.route("/").get(getAllCats).post(createCat);
router.route("/:id").get(getCat).patch(updateCat).delete(deleteCat);

module.exports = router;
