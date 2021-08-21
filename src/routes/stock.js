const router = require("express").Router();
const stockController = require("../controllers/stock.controller");

router.route("/create").post(stockController.create);
router.route("/stockList").get(stockController.list);
router.route("/stockUpdate").put(stockController.update);
router.route("/stockDelete").delete(stockController.destroy);

module.exports = router;
