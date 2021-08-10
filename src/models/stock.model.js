const { Schema, model, models } = require("mongoose");

const stockSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "El campo nombre del material es requerido"],
    },
    type: {
      type: String,
      required: [true, "El campo tipo de material es requerido"],
    },
    batch: {
      type: String,
      required: [true, "El lote de material es requerido"],
    },
    amountInStock: {
      type: Number,
      required: [true, "La cantidad de material es requerido"],
    },
  },
  {
    timestamps: true,
  }
);

const Stock = model("Stock", stockSchema);

module.exports = Stock;
