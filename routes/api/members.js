const express = require("express");
const router = express.Router();

const Member = require("../../models/Member");

//#region POST api/members/add
//@desc Adds member to db
//@access Public
router.post("/add", (req, res) => {
  const newMember = new Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    grade: req.body.grade
  });

  newMember
    .save()
    .then(member => res.json(member))
    .catch(err => console.log(err));
});

module.exports = router;
