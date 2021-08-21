const router = require("express").Router();
const materialController = require("../controllers/material.controller");

router.route("/create").post(materialController.create);
router.route("/materialInfo").get(materialController.show);
router.route("/materialList").get(materialController.list);
router.route("/materialDelete").delete(materialController.destroy);
router.route("/materialUpdate").put(materialController.update);

module.exports = router;
