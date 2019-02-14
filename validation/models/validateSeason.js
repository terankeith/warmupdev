const Validator = require("validator");
const isEmpty = require("../helpers/is-empty");
module.exports = function validateSeasonInput(data) {
  let errors = {};

  data.year = !isEmpty(data.year) ? data.year : "";
  data.season = !isEmpty(data.season) ? data.season : "";

  //YEAR
  if (Validator.isEmpty(data.year)) {
    errors.year = "Must enter year for season";
  }

  //SEASON
  if (Validator.isEmpty(data.season)) {
    errors.season = "Must enter season";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
