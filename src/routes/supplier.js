const router = require("express").Router();
const supplierController = require("../controllers/supplier.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, supplierController.create);
router.route("/supplierList").get(auth, supplierController.list);
router.route("/supplierUpdate").put(auth, supplierController.update);
router.route("/supplierDelete").delete(auth, supplierController.destroy);
module.exports = router;
