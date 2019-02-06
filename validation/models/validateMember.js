const Validator = require("validator");
const isEmpty = require("../helpers/is-empty");
module.exports = function validateMemberInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

  //FIRST NAME
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Must enter first name";
  }

  //LAST NAME
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Must enter last name";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
