const Flight = require("../models/flight");

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { flights });
}

async function newFlight(req, res) {
  res.render("flights/new", { errMsg: "" });
}

async function create(req, res) {
  //airline-string formatting
  req.body.airline = req.body.airline.trim();

  //flight Num: 10-9999
  if (
    isNaN(req.body.flightNo) ||
    req.body.flightNo < 10 ||
    req.body.flightNo > 9999
  ) {
    return res.render("flights/new", {
      errMsg: "Flight number must be a number between 10 and 9999.",
    });
  }

  //flight date:?????

  try {
    //link req.body to database
    Flight.create(req.body);
    res.redirect("/flights/new");
  } catch (err) {
    res.render("flights/new", { errMsg: err.message });
  }
}

module.exports = {
  index,
  new: newFlight,
  create,
};
