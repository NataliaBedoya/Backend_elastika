const { Schema, model, models } = require("mongoose");

const transitSchema = new Schema(
  {
    order: {
      type: String,
      required: [true, "El campo orden de compra del material es requerido"],
    },
    orderDate: {
      type: Date,
      required: [true, "El campo fecha de orden de compra es requerido"],
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: [true, "El campo supplier es requerido"],
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "El campo nombre del material es requerido"],
    },
    amount: {
      type: Number,
      required: [true, "El campo cantidad del material es requerido"],
    },
    transactionType: String,
    shipmentDate: {
      type: Date,
      //required: [true, "El campo fecha de embarque es requerido"],
    },
    arrivalDate: {
      type: Date,
      //required: [true, "El campo fecha de despacho es requerido"],
    },
    releaseDate: {
      type: Date,
      //required: [true, "El campo fecha de habilitación es requerido"],
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Transit = model("Transit", transitSchema);

module.exports = Transit;
