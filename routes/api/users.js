const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//LOAD USER MODEL
const User = require("../../models/User");

//#region GET api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Users Works"
  })
);
//#endregion

module.exports = router;
