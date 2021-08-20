const Commit = require("../models/commit.model");
const Material = require("../models/material.model");
const Customer = require("../models/customer.model");

module.exports = {
  async create(req, res) {
    try {
      const {
        amount,
        customerId,
        order,
        assignmentDate,
        deliveryDate,
        notes,
        materialId,
      } = req.body;
      const material = await Material.findById(materialId);
      const commit = await Commit.create({
        amount,
        customer: customerId,
        order,
        assignmentDate,
        deliveryDate,
        notes,
        material: materialId,
      });

      const commit2 = await Commit.findById(commit._id)
        .populate("material")
        .populate("customer");

      await Material.updateOne(
        { _id: materialId },
        { $addToSet: { commit: commit._id } }
      );
      await Customer.updateOne(
        { _id: customerId },
        { $addToSet: { commit: commit._id } }
      );
      res.status(201).json(commit2);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const { materialId } = req.body;
      const commits = await Commit.find({ materialName: materialId })
        .collation({ locale: "es" })
        .sort({ name: 1 })
        .populate("material.name");
      res.status(200).json(commits);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { commitId } = req.body;
      const commit = await Commit.findByIdAndDelete(commitId);
      res.status(200).json(commit);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
