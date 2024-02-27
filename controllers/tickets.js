const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  //create new ticket
  const tickets = await Ticket.find({});
  res.render("tickets/new", { tickets, flight });
}

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  try {
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
