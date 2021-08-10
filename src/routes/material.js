const router = require("express").Router();
const materialController = require("../controllers/material.controller");

router.route("/create").post(materialController.create);
router.route("/materialList").get(materialController.list);
router.route("/materialDelete").delete(materialController.destroy);

module.exports = router;
