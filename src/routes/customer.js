const router = require("express").Router();
const customerController = require("../controllers/customer.controller");

router.route("/customerList").get(customerController.list);
router.route("/customerDelete").delete(customerController.destroy);
router.route("/create").post(customerController.create);

module.exports = router;
