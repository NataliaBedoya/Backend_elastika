const router = require("express").Router();
const customerController = require("../controllers/customer.controller");

router.route("/create").post(customerController.create);
router.route("/customerList").get(customerController.list);
router.route("/customerUpdate").put(customerController.update);
router.route("/customerDelete").delete(customerController.destroy);
router.route("/deleteContact").put(customerController.deleteContact);

module.exports = router;
