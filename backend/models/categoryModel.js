const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    ancestors: [
      {
        name: String,
      },
    ],
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
