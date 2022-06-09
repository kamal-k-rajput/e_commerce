const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);

module.exports = Product;
