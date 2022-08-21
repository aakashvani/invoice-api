const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aakashvani:aakashvani@cluster0.v8o1biu.mongodb.net/invoice-api?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold);
  }
};

module.exports = connectDB;
