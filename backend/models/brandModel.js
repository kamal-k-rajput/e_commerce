const mongoose = require("mongoose");

const brandSchema = mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      unique: true,
    },
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;
