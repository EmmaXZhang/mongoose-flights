const express = require("express");
const router = express.Router();
const ticketsController = require("../controllers/tickets");

// GET /performers/new (new functionality)
router.get("/flights/:id/tickets/new", ticketsController.new);
// POST /performers (create functionality)
router.post("/flights/:id/tickets", ticketsController.create);

module.exports = router;
