const Flight = require("../models/flight");

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

module.exports = {
  index,
};
