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
      const materials = await Material.find();
      res.status(200).json(materials);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      // const { materialId, body } = req;
      const {
        params: { materialId },
        body,
      } = req;
      const material = await Material.findByIdAndUpdate(materialId, body, {
        new: true,
      });
      res.status(200).json(material);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      //const { materialId } = req;
      const { materialId } = req.params;
      const material = await Material.findByIdAndDelete(materialId);
      res.status(200).json(material);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // async show(req, res) {
  //   try {
  //     const { userId } = req;
  //     const user = await User.findById(userId);
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // },
};
