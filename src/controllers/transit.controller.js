const Transit = require("../models/transit.model");
const Material = require("../models/material.model");
const Supplier = require("../models/supplier.model");

module.exports = {
  async create(req, res) {
    try {
      const {
        order,
        orderDate,
        supplierId,
        materialId,
        amount,
        transactionType,
        shipmentDate,
        arrivalDate,
        releaseDate,
        notes,
      } = req.body;
      const material = await Material.findById(materialId);
      const transit = await Transit.create({
        order,
        orderDate,
        supplier: supplierId,
        material: materialId,
        amount,
        transactionType,
        shipmentDate,
        arrivalDate,
        releaseDate,
        notes,
      });
      const transit2 = await Transit.findById(transit._id)
        .populate("material")
        .populate("supplier");

      await Material.updateOne(
        { _id: materialId },
        { $addToSet: { transit: transit._id } }
      );
      await Supplier.updateOne(
        { _id: supplierId },
        { $addToSet: { transit: transit._id } }
      );
      res.status(201).json(transit2);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const transits = await Transit.find()
        .collation({ locale: "es" })
        .sort({ name: 1 })
        .populate({ path: "material", select: "name" })
        .populate({ path: "supplier", select: "name" });
      res.status(200).json(transits);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { transitId } = req.body;
      const transit = await Transit.findByIdAndDelete(transitId);
      res.status(200).json(transit);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
