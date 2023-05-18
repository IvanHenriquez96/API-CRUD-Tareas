const router = require("express").Router();
const TareasController = require("../Controllers/TareasController");

router.get("/", TareasController.readTareas);

router.get("/another-route", (req, res) => {
  // router code here
});

module.exports = router;
