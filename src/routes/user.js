const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { auth } = require("../utils/middlewares.js");

router.route("/signin").post(userController.signin);
router.route("/userList").get(userController.list);
router.route("/userDelete").delete(userController.destroy);
router.route("/signup").post(userController.signup);

module.exports = router;
