const { Schema, model, models } = require("mongoose");

const stockSchema = new Schema(
  {
    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "El campo nombre del material es requerido"],
    },

    batch: {
      type: String,
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
