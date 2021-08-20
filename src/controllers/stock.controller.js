const Stock = require("../models/stock.model");
const Material = require("../models/material.model");

module.exports = {
  async create(req, res) {
    try {
      const { batch, amountInStock, materialId } = req.body;
      const material = await Material.findById(materialId);
      const stock = await Stock.create({
        batch,
        amountInStock,
        material: materialId,
      });
      const stock2 = await Stock.findById(stock._id).populate("material");
      res.status(201).json(stock2);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const { materialId } = req.body;
      const stocks = await Stock.find({ materialName: materialId })
        .collation({ locale: "es" })
        .sort({ name: 1 })
        .populate("material.name");
      res.status(200).json(stocks);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { batchId } = req.body;
      const stock = await Stock.findByIdAndDelete(batchId);
      res.status(200).json(stock);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { batchId, amountInStock } = req.body;
      const stock = await Stock.findById(batchId);
      if (req.body.amountInStock !== "") {
        stock.amountInStock = req.body.amountInStock;
      }
      await stock.save();
      res.status(200).json(stock);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
