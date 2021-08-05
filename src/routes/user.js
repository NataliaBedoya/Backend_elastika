const router = require("express").Router();
const userController = require("../controllers/user.controller");
//const { auth, formData, userFilter } = require("../utils/middlewares");

router.route("/create").post(userController.create);
router.route("/list").get(userController.list);
router.route("/:userId").put(userController.update);
//router.route("/update").put(userController.update);
router.route("/:userId").delete(userController.destroy);
//router.route("/delete").delete(userController.destroy);

module.exports = router;
