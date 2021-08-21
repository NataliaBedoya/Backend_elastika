const router = require("express").Router();
const customerController = require("../controllers/customer.controller");

router.route("/customerList").get(customerController.list);
router.route("/customerDelete").delete(customerController.destroy);
router.route("/create").post(customerController.create);
router.route("/customerUpdate").put(customerController.update);
router.route("/deleteContact").put(customerController.deleteContact);

module.exports = router;
