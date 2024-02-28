const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
const ticket = require("../models/ticket");

async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
  //create new ticket

  res.render("tickets/new", { flight });
}

async function create(req, res) {
  // res.redirect(`/flights/${req.params.id}/tickets/new`);
  try {
    //add flight.id to flight property, as in the create form, it didnt pass the data
    req.body.flight = req.params.id;
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/flights/" + req.params.id);
}

module.exports = {
  new: newTicket,
  create,
};
