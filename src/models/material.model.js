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
  },
  {
    timestamps: true,
  }
);

const Material = model("Material", materialSchema);

module.exports = Material;
