const express = require("express");

const cors = require("cors");
const { bikeRoute } = require("./routes/bike.route");
const { connection } = require("./config/db");
const { helmetRoute } = require("./routes/helmet.route");
const { jacketRoute } = require("./routes/jacket.model");
const { gloveRoute } = require("./routes/glove.route");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Bike Enthusiast API");
});

app.use("/bikes", bikeRoute);

app.use("/helmets", helmetRoute);

app.use("/jackets", jacketRoute);

app.use("/gloves", gloveRoute);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  connection;
  console.log("Connected to MongoDB");
});
