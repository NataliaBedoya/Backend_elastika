const router = require("express").Router();
const supplierController = require("../controllers/supplier.controller");

router.route("/create").post(supplierController.create);
router.route("/supplierList").get(supplierController.list);
router.route("/supplierUpdate").put(supplierController.update);
router.route("/supplierDelete").delete(supplierController.destroy);

module.exports = router;
