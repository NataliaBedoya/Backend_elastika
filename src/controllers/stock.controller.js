const Stock = require("../models/stock.model");
const Material = require("../models/material.model");

module.exports = {
  async create(req, res) {
    try {
      const {
        body,
        params: { materialId },
      } = req;
      const stock = await Stock.create({ ...body, material: materialId });
      res.status(201).json(stock);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { stockId } = req.params;
      const stock = await Stock.findById(stockId).populate("name");
      res.status(200).json(stock);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
