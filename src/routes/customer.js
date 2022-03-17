const router = require("express").Router();
const customerController = require("../controllers/customer.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, customerController.create);
router.route("/customerList").get(auth, customerController.list);
router.route("/customerUpdate").put(auth, customerController.update);
router.route("/customerDelete").delete(auth, customerController.destroy);
router.route("/deleteContact").put(auth, customerController.deleteContact);

module.exports = router;
