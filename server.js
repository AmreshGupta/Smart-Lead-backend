const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");
require("./cron/leadCron");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kumargupta5424_db_user:Gulabo%409119@cluster0.h5lf5i2.mongodb.net/mydb?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api/leads", leadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
