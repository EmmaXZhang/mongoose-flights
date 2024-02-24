var express = require("express");
var router = express.Router();
const flightsController = require("../controllers/flights");

// display all flights
router.get("/", flightsController.index);

module.exports = router;
