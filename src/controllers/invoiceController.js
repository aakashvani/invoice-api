const Invoice = require("../models/invoiceModel");

// to create an invoice 
const creatingInvoice = async (req, res, next) => {
  try {
    const invoice = await Invoice.create(req.body);
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

// to get all invoice
const getAllInvoice = async (req, res, next) => {
  try {
    const invoices = await Invoice.find({})
      .sort({ invoiceNumber: 1 })
      .lean()
      .exec();
    return res.status(200).send(invoices);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.creatingInvoice = creatingInvoice;
exports.getAllInvoice = getAllInvoice;
