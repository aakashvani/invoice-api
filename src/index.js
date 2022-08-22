const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/invoiceRoute")

app.use(express.json());
app.use(cors());

app.use("/api", router);

module.exports = app;