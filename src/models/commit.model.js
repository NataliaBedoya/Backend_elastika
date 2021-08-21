const { Schema, model, models } = require("mongoose");

const commitSchema = new Schema(
  {
    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "El campo nombre del material es requerido"],
    },
    amount: {
      type: Number,
      required: [true, "El campo cantidad del material es requerido"],
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: [true, "El campo cliente es obligatorio"],
    },
    order: {
      type: String,
      required: [true, "El campo orden de compra del material es requerido"],
    },
    assignmentDate: {
      type: Date,
      required: [true, "El campo fecha de asignación es requerido"],
    },
    deliveryDate: {
      type: Date,
      required: [true, "El campo fecha de despacho es requerido"],
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Commit = model("Commit", commitSchema);

module.exports = Commit;
