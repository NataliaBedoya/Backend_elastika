const router = require("express").Router();
const stockController = require("../controllers/stock.controller");

router.route("/create").post(stockController.create);
router.route("/stockList").get(stockController.list);
router.route("/stockDelete").delete(stockController.destroy);
router.route("/stockUpdate").put(stockController.update);

module.exports = router;
