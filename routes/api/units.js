const express = require("express");
const router = express.Router();

//Load Validation
const validateUnitInput = require("../../validation/models/validateUnit");
const Unit = require("../../models/Unit");

//#region POST api/units/
//@desc Adds Unit to db
//@access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateUnitInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const unitFields = {
    name: req.body.name,
    foundingYear: req.body.foundingYear
  };

  new Unit(unitFields)
    .save()
    .then(unit => res.json(unit))
    .catch(err => console.log(err));
});
//#endregion

//#region GET api/units/
//@desc GETS Unit from db
//@access Public
router.get("/", (req, res) => {
  Unit.find().then(units => res.json(units));
});
//#endregion

//#region DELETE api/units/:id
//@desc Delete unit
router.delete("/:id", (req, res) => {
  Unit.findById(req.params.id).then(unit => {
    unit
      .remove()
      .then(() => res.json({ unitremoved: true }))
      .catch(err => res.status(404).json(err));
  });
});
//#endregion
module.exports = router;
