const router = require("express").Router();
const transitController = require("../controllers/transit.controller");

router.route("/create").post(transitController.create);
router.route("/transitList").get(transitController.list);
router.route("/transitDelete").delete(transitController.destroy);

module.exports = router;
