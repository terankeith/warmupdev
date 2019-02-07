const express = require("express");
const router = express.Router();

//Load Validation
const validateMemberInput = require("../../validation/models/validateMember");

const Member = require("../../models/Member");

//#region POST api/members/add
//@desc Adds member to db
//@access Public
router.post("/add", (req, res) => {
  const { errors, isValid } = validateMemberInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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
//#endregion

//#region GET api/members
//@desc Gets all members
//@access PUBLIC
router.get("/", (req, res) => {
  Member.find().then(members => {
    res.json(members);
  });
});
//#endregion

//#region DELETE api/members/:id
//@desc Delete Member
//@access PUBLIC
router.delete("/:id", (req, res) => {
  Member.findById(req.params.id).then(member => {
    //delete
    member
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.status(404).json({ membernotfound: "No member found" })
      );
  });
});
//#endregion

module.exports = router;
