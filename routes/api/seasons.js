const express = require("express");
const router = express.Router();

//Load Validation
const validateSeasonInput = require("../../validation/models/validateSeason");
const Season = require("../../models/Season");
const Unit = require("../../models/Unit");

//#region POST api/seasons/:id
//@desc Adds season
//@access Public
router.post("/units/:id", (req, res) => {
  const { errors, isValid } = validateSeasonInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Unit.findById(req.params.id)
    .then(unit => {
      if (unit) {
        const newSeason = {
          unit: unit.id,
          year: req.body.year,
          season: req.body.season,
          showTitle: req.body.showTitle,
          membership: req.body.memberShip,
          memberdues: req.body.memberdues,
          icon: req.body.icon
        };

        new Season(newSeason)
          .save()
          .then(season => res.json(season))
          .catch(err => res.status(404).json(err));
      }
    })
    .catch(err => res.status(404).json(err));
});
//#endregion

//#region POST api/seasons/members/:id/:member_id
router.post("/members/:id/:member_id", (req, res) => {
  Season.findById(req.params.id)
    .then(season => {
      if (
        season.membership.filter(
          member => member.member.toString() === req.params.member_id
        ).length > 0
      ) {
        return res
          .status(400)
          .json({ alreadyAdded: "Member already added to season" });
      } else {
        season.membership.push({ member: req.params.member_id });
        season.save().then(season => res.json(season));
      }
    })
    .catch(err =>
      res.status(404).json({ notfound: "The season was not found" })
    );
});
//#endregion

//#region GET api/seasons/:id
//@desc GETS season by seasonid
router.get("/:id", (req, res) => {
  Season.findById(req.params.id)
    .populate("unit", ["name"])
    .populate("membership.member")
    .then(season => res.json(season))
    .catch(err => res.status(404).json({ noseason: "Season not found" }));
});
//#endregion

//#region GET api/seasons/unit/:id
//@desc GETS seasons by unitID
router.get("/unit/:id", (req, res) => {
  Season.find({ unit: req.params.id })
    .sort({ year: -1 })
    .then(seasons => res.json(seasons));
});

//#endregion

//#region DELETE api/seasons/:id/:membership_id
//@desc REMOVE Member from season
router.delete("/:id/:membership_id", (req, res) => {
  Season.findById(req.params.id)
    .then(season => {
      const removeIndex = season.membership
        .map(item => item.id)
        .indexOf(req.params.membership_id);

      // Splice out of array
      season.membership.splice(removeIndex, 1);
      season.save().then(season => res.json(season));
    })
    .catch(err => res.status(404).json(err));
});
//#endregion

//#region DELETE api/seasons/:id
//@desc Delete season
router.delete("/:id", (req, res) => {
  Season.findById(req.params.id).then(season => {
    season
      .remove()
      .then(() => res.json({ seasonremoved: true }))
      .catch(err => res.status(404).json(err));
  });
});
//#endregion
module.exports = router;
