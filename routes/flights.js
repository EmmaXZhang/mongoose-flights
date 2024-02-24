var express = require("express");
var router = express.Router();
const flightsController = require("../controllers/flights");

// display all flights
router.get("/", flightsController.index);

//enter new flight
router.get("/new", flightsController.new);
//create new flight
router.post("/", flightsController.create);

module.exports = router;
