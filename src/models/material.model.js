const { Schema, model, models } = require("mongoose");

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Material name is required"],
    },

    description: {
      type: String,
    },

    threshold: {
      type: Number,
      required: [true, "Material threshold is required"],
    },

    stock: {
      type: [{ type: Schema.Types.ObjectId, ref: "Stock" }],
    },
    commit: {
      type: [{ type: Schema.Types.ObjectId, ref: "Commit" }],
    },
    transit: {
      type: [{ type: Schema.Types.ObjectId, ref: "Transit" }],
    },
  },
  {
    timestamps: true,
  }
);

const Material = model("Material", materialSchema);

module.exports = Material;
