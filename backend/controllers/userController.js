const express = require("express");

const router = express.Router();
const User = require("../models/userModel");
//------------------------------------get all users----------------------------
router.get("/", async function (req, res) {
  try {
    const users = await User.find().lean().exec();
    return res.status(201).send({ users });
  } catch (e) {
    return res.status(404).send({ status: false, message: e.message });
  }
});
// --------------------------------get a single user----------------------
router.get("/:id", async function (req, res) {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send({ user });
  } catch (e) {
    return res.status(404).send({ status: false, message: e.message });
  }
});
// ------------------------------edit an existing user--------------------

router.put("/:id/edit", async function (req, res) {
  try {
    let user = await User.findById(req.params.id).lean().exec();
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec();
    return res.status(201).send({ user: user });
  } catch (e) {
    return res.status(404).send({ message: e.message }, { new: true });
  }
});

// --------------------------------create a new user--------------------

router.post("/create", async function (req, res) {
  try {
    const user = await User.create(req.body);
    if (!user) {
      return res
        .status(404)
        .send({ status: false, message: "pass all required field" });
    }
    return res.status(201).send({ user, status: true });
  } catch (err) {
    return res.status(404).send({ status: false, message: e.message });
  }
});

//---------------------------get all addresses--------------------

router.get("/:id/addresses", async function (req, res) {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    user = await User.findById(req.params.id, { address: 1 });
    return res.status(201).send({ status: true, user });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
router.put("/:id/addresses/create", async function (req, res) {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    user = await User.findByIdAndUpdate(req.params.id, {
      $push: {
        address: req.body,
      },
    });
    return res.status(201).send({ status: true, user });
  } catch (err) {
    return res.status(404).send({ status: false, message: err.message });
  }
});
module.exports = router;
