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

    threshold: {
      type: Number,
      required: [true, "El campo umbral del material es requerido"],
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
