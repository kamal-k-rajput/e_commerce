const express = require("express");

const router = express.Router();
const Category = require("../models/categoryModel");
router.get("/", async function (req, res) {
  try {
    let category = await Category.find().lean().exec();
    console.log(category);
    if (!category) {
      return res
        .status(404)
        .send({ message: "category not found", status: false });
    }
    return res.status(201).send({ category: category, status: true });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});
router.post("/create", async function (req, res) {
  try {
    let category = await Category.find({ categoryName: req.body.category })
      .lean()
      .exec();
    if (!category) {
      category = await Category.create({ categoryName: req.body });
      return res.status(201).send({ status: true, category: category });
    }
    return res.status(202).send({
      status: false,
      message: "category already exists",
      category: category,
    });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});
module.exports = router;
