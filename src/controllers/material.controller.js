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

  async show(req, res) {
    try {
      const { materialId } = req.body;
      const material = await Material.findById(materialId);
      res.status(200).json(material);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async list(req, res) {
    try {
      const materials = await Material.find()
        .collation({ locale: "es" })
        .sort({ name: 1 });
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

  async update(req, res) {
    try {
      const { materialId, threshold } = req.body;
      const material = await Material.findById(materialId);
      if (req.body.threshold !== "") {
        material.threshold = req.body.threshold;
      }
      await material.save();
      res.status(200).json(material);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
