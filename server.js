
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");
require("./cron/leadCron");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/smartlead")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/leads", leadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
