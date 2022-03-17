const router = require("express").Router();
const materialController = require("../controllers/material.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(auth, materialController.create);
//router.route("/materialInfo").get(auth, materialController.show);
router.route("/materialList").get(auth, materialController.list);
router.route("/materialUpdate").put(auth, materialController.update);
router.route("/materialDelete").delete(auth, materialController.destroy);

module.exports = router;
