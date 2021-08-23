const router = require("express").Router();
const commitController = require("../controllers/commit.controller");

router.route("/create").post(commitController.create);
router.route("/commitList").get(commitController.list);
router.route("/commitDelete").delete(commitController.destroy);

module.exports = router;
