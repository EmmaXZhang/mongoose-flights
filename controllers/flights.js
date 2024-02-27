const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

//functions
async function index(req, res) {
  //sort in ascending order 1 indicates ascending order,-1 descending
  const flights = await Flight.find().sort({ departs: 1 });

  res.render("flights/index", { flights });
}

async function newFlight(req, res) {
  //format flight departs date to yyyy-MM-mm
  const newFlightDepart = new Flight();
  const dt = newFlightDepart.departs;
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  departsDate += `-${dt.getDate().toString().padStart(2, "0")}T${dt
    .toTimeString()
    .slice(0, 5)}`;

  res.render("flights/new", { errMsg: "", departsDate });
}

async function create(req, res) {
  try {
    //airline-string formatting
    req.body.airline = req.body.airline.trim();
    //link req.body to database
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    const newFlightDepart = new Flight();
    const dt = newFlightDepart.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
    departsDate += `-${dt.getDate().toString().padStart(2, "0")}T${dt
      .toTimeString()
      .slice(0, 5)}`;
    res.render("flights/new", { errMsg: err.message, departsDate });
  }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({ flight: flight._id });

  // Flight.findById(req.params.id, function (err, flight) {
  //   Ticket.find({ flight: flight._id }, function (err, tickets) {
  //     // Now you can pass both the flight and tickets in the res.render call
  //   });
  // });
  res.render("flights/show", { flight, tickets });
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};
