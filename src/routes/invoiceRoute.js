const express = require("express");
const { getAllInvoice, creatingInvoice } = require("../controllers/invoiceController");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to invoice api");
});

// creating route endpoint
router.post("/", creatingInvoice)
router.get("/allinvoice", getAllInvoice);

module.exports = router;
