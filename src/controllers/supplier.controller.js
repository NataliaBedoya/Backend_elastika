const Supplier = require("../models/supplier.model");

module.exports = {
  async list(req, res) {
    try {
      const suppliers = await Supplier.find();
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
};
