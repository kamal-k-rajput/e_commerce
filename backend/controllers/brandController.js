const express = require("express");
const Brand = require("../models/brandModel");

const router = express.Router();

//------------------------------------get all brands----------------------------
router.get("/", async (req, res) => {
  try {
    let brands = await Brand.find().lean().exec();
    if (!brands) {
      return res.status(404).send({ message: err.message, status: false });
    }
    return res.status(200).send({ status: true, brands: brands });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});
//------------------------------------get a brand by id--------------------------------
router.get("/:id", async (req, res) => {
  try {
    let brand = await Brand.findById(req.params.id).lean().exec();
    if (!brand) {
      return res.status(404).send({ message: err.message, status: false });
    }
    return res.status(200).send({ status: true, brand: brand });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});

//--------------------------------edit brand by id--------------------------------
router.put("/:id/edit", async (req, res) => {
  try {
    let brand = await Brand.findById(req.params.id).lean().exec();
    if (!brand) {
      return res.status(404).send({ message: err.message, status: false });
    }
    brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ status: true, brand: brand });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});

//---------------------------create a brand----------------------------
router.post("/create", async (req, res) => {
  try {
    let brand = await Brand.create(req.body);
    if (!brand) {
      return res.status(404).send({ message: err.message, status: false });
    }
    return res.status(200).send({ status: true, brand });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
});
module.exports = router;
