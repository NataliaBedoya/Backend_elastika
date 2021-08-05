const router = require("express").Router();
const materialController = require("../controllers/material.controller");

router.route("/create").post(materialController.create);
router.route("/list").get(materialController.list);
router.route("/:materialId").put(materialController.update);
//router.route("/update").put(materialController.update);
router.route("/:materialId").delete(materialController.destroy);
//router.route("/delete").delete(materialController.destroy);

module.exports = router;
