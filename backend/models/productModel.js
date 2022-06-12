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
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      default: 1,
    },
    deliveryCharge: {
      type: Number,
      default: 0,
    },
    tags: [
      {
        type: String,
      },
    ],
    images: { type: Array, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);

module.exports = Product;
