const app = require("./index");
require("colors");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.error(`Listening On Port ${PORT}`.green.bold);
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold);
  }
});
