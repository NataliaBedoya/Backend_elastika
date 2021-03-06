const { Schema, model, models } = require("mongoose");

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const supplierSchema = new Schema(
  {

    dni: String,
    name: {
      type: String,
      required: [true, "Supplier name is required"],
    },
    contact1: {
      type: String,
      required: [true, "Contact name is required"],
    },
    email1: {
      type: String,
      required: [true, "Contact email is required"],
      match: [emailRegex, "Invalid email"],
    },
    phone1: {
      type: String,
      required: [true, "Contact phone is required"],
    },
    country: {
      type: String,
    },
    city: {
      type: String,

    },
  },
  {
    timestamps: true,
  }
);

const Supplier = model("Supplier", supplierSchema);

module.exports = Supplier;
