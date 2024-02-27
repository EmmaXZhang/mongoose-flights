const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
const ticket = require("../models/ticket");

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  //create new ticket
  const tickets = await Ticket.find({});
  res.render("tickets/new", { tickets, flight });
}

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);

  try {
    //add flight.id to flight property, as in the create form, it didnt pass the data
    req.body.flight = flight._id;
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/flights/" + flight._id);
}

module.exports = {
  new: newTicket,
  create,
};
