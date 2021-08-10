const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { auth } = require("../utils/middlewares");

router.route("/signup").post(userController.signup);
router.route("/create").post(userController.create);
router.route("/userList").get(userController.list);
router.route("/userInfo").get(auth, userController.show);
router.route("/userUpdate").put(auth, userController.update);
router.route("/userDelete").delete(userController.destroy);
router.route("/signin").post(userController.signin);

module.exports = router;
