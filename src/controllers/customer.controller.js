const Customer = require("../models/customer.model");

module.exports = {
  async list(req, res) {
    try {
      const customers = await Customer.find()
        .collation({ locale: "es" })
        .sort({ name: 1 });
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

  async update(req, res) {
    try {
      const { customerId, businessPhone, contact1, email1, phone1 } = req.body;

      const customer = await Customer.findById(customerId);
      if (req.body.businessPhone !== "") {
        customer.businessPhone = req.body.businessPhone;
      }
      if (req.body.contact1 !== "") {
        customer.contact1 = req.body.contact1;
      }
      if (req.body.email1 !== "") {
        customer.email1 = req.body.email1;
      }
      if (req.body.phone1 !== "") {
        customer.phone1 = req.body.phone1;
      }

      await customer.save();

      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteContact(req, res) {
    try {
      const { customerId } = req.body;
      console.log(customerId);
      const customer = await Customer.findById(customerId);
      customer.contact2 = null;
      customer.email2 = null;
      customer.phone2 = null;
      await customer.save();
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
