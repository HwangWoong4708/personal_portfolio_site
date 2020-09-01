const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const boardRoutes = require("./routes/board");

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/board", boardRoutes);

const port = process.env.PORT || 3030;
app.listen(port, console.log(`server running on port ${port}`));
