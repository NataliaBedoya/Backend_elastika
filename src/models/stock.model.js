const { Schema, model, models } = require("mongoose");

const stockSchema = new Schema(
  {

    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "Material name is required"],
    },

    batch: {
      type: String,
      required: [true, "Batch ID is required"],
    },

    amountInStock: {
      type: Number,

    },
  },
  {
    timestamps: true,
  }
);

const Stock = model("Stock", stockSchema);

module.exports = Stock;
