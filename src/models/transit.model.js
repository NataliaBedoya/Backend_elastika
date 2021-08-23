const { Schema, model, models } = require("mongoose");

const transitSchema = new Schema(
  {
    order: {
      type: String,
      required: [true, "Purchase order is required"],
    },
    orderDate: {
      type: Date,
      required: [true, "Order date is required"],
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: "Supplier",
      required: [true, "Supplier name is required"],
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: [true, "Material name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Material amount is required"],
    },
    transactionType: {
      type: String,
      required: [true, "Transaction type is required"],
    },
    shipmentDate: {
      type: Date,
    },
    arrivalDate: {
      type: Date,
    },
    releaseDate: {
      type: Date,
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Transit = model("Transit", transitSchema);

module.exports = Transit;
