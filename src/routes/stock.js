const router = require("express").Router();
const stockController = require("../controllers/stock.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, stockController.create);
router.route("/stockList").get(auth, stockController.list);
router.route("/stockUpdate").put(auth, stockController.update);
router.route("/stockDelete").delete(auth, stockController.destroy);


module.exports = router;
