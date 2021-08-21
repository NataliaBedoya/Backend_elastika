const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { auth, userFilter } = require("../utils/middlewares.js");

router.route("/signin").post(userController.signin);
router.route("/userList").get(userController.list);
router.route("/userDelete").delete(userController.destroy);
router.route("/signup").post(userController.signup);
router.route("/userUpdate").put(auth, userController.update);

module.exports = router;
