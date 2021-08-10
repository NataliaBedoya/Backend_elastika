const { Schema, model, models } = require("mongoose");

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El campo nombre del material es requerido"],
    },

    description: {
      type: String,
    },

    stock: {
      type: [{ type: Schema.Types.ObjectId, ref: "Stock" }],
    },
  },
  {
    timestamps: true,
  }
);

const Material = model("Material", materialSchema);

module.exports = Material;
