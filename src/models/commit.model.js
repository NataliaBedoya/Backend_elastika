const { Schema, model, models } = require("mongoose");

const commitSchema = new Schema(
  {
    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "Material name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Material amount is required"],
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: [true, "Customer name is required"],
    },
    order: {
      type: String,
      required: [true, "Purchase order is required"],
    },
    assignmentDate: {
      type: Date,
      required: [true, "Assignment date is required"],
    },
    deliveryDate: {
      type: Date,
      required: [true, "Delivery date is required"],
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Commit = model("Commit", commitSchema);

module.exports = Commit;
