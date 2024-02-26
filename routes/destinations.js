var express = require("express");
var router = express.Router();
const destinationsController = require("../controllers/destinations");

router.post("/:id/destinations", destinationsController.create);

module.exports = router;
