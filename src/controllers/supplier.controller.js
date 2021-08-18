const Supplier = require("../models/supplier.model");

module.exports = {
  async list(req, res) {
    try {
      const suppliers = await Supplier.find()
        .collation({ locale: "es" })
        .sort({ name: 1 });
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { supplierId } = req.body;
      const supplier = await Supplier.findByIdAndDelete(supplierId);
      res.status(200).json(supplier);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const supplier = await Supplier.create(body);
      res.status(201).json(supplier);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { supplierId, contact1, email1, phone1 } = req.body;

      const supplier = await Supplier.findById(supplierId);
      if (req.body.contact1 !== "") {
        supplier.contact1 = req.body.contact1;
      }
      if (req.body.email1 !== "") {
        supplier.email1 = req.body.email1;
      }
      if (req.body.phone1 !== "") {
        supplier.phone1 = req.body.phone1;
      }

      await supplier.save();

      res.status(200).json(supplier);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
