const router = require("express").Router();
const stockController = require("../controllers/stock.controller");

router.route("/:materialId").post(stockController.create);
router.route("/:stockId").get(stockController.show);
// router.route("/list").get(materialController.list);
// router.route("/:materialId").put(materialController.update);
// //router.route("/update").put(materialController.update);
// router.route("/:materialId").delete(materialController.destroy);
// //router.route("/delete").delete(materialController.destroy);

module.exports = router;
