const router = require("express").Router();
const supplierController = require("../controllers/supplier.controller");

router.route("/supplierList").get(supplierController.list);
router.route("/supplierDelete").delete(supplierController.destroy);
router.route("/create").post(supplierController.create);

module.exports = router;
