const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { auth, userFilter } = require("../utils/middlewares.js");

router.route("/signup").post(userController.signup);
router.route("/signin").post(userController.signin);
router.route("/userList").get(userController.list);
router.route("/userUpdate").put(auth, userController.update);
router.route("/userDelete").delete(userController.destroy);

module.exports = router;
