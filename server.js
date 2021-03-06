const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//#region ROUTES API
const members = require("./routes/api/members");
const users = require("./routes/api/users");
const units = require("./routes/api/units");
const seasons = require("./routes/api/seasons");
//#endregion

const app = express();

//DB CONFIG
const db = require("./config/keys").mongoURI;

//#region MIDDLEWARE
//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//MONGODB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);
//#endregion

//USE ROUTES
app.use("/api/members", members);
app.use("/api/users/", users);
app.use("/api/units/", units);
app.use("/api/seasons/", seasons);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
