const Material = require("../models/material.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const material = await Material.create(body);
      res.status(201).json(material);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const materials = await Material.find({}).sort({ name: 1 });
      res.status(200).json(materials);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { materialId } = req.body;
      const material = await Material.findByIdAndDelete(materialId);
      res.status(200).json(material);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
