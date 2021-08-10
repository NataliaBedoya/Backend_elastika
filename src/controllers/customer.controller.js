const Customer = require("../models/customer.model");

module.exports = {
  async list(req, res) {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { customerId } = req.body;
      const customer = await Customer.findByIdAndDelete(customerId);
      res.status(200).json(customer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const customer = await Customer.create(body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
