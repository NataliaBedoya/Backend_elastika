const router = require("express").Router();
const commitController = require("../controllers/commit.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, commitController.create);
router.route("/commitList").get(auth, commitController.list);
router.route("/commitDelete").delete(auth, commitController.destroy);

module.exports = router;
