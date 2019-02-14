const Validator = require("validator");
const isEmpty = require("../helpers/is-empty");
module.exports = function validateUnitInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  //FIRST NAME
  if (Validator.isEmpty(data.name)) {
    errors.name = "Must enter name for unit";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
