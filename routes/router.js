const router = require("express").Router();
const TareasController = require("../Controllers/TareasController");

router.get("/", TareasController.inicio);

router.get("/api/", TareasController.readTareas);

module.exports = router;
