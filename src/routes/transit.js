const router = require("express").Router();
const transitController = require("../controllers/transit.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, transitController.create);
router.route("/transitList").get(auth, transitController.list);
router.route("/transitDelete").delete(auth, transitController.destroy);

module.exports = router;
