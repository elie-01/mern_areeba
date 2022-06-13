const isEmpty = require("./isEmpty");
// const isValidPhoneNumber = require("./isValidPhoneNumber");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.Name = !isEmpty(data.Name) ? data.Name : "";
  data.Address = !isEmpty(data.Address) ? data.Address : "";
  data.Number = !isEmpty(data.Number) ? data.Number : "";


  if (validator.isEmpty(data.Name)) {
    errors.Name = "Required Name";
  }

  if (validator.isEmpty(data.Address)) {
    errors.Address = "Required Address";
  }

  if (validator.isEmpty(data.Number) || data.Number == 1) {
    errors.Number = "Required number";
  } 

  if (!validator.isMobilePhone(data.Number)){
    errors.Number = "This number is not valid";
  }

  if (!validator.isAlpha(data.Name.replace(/[\s]+/g, ""))) {
    errors.Name = "Enter a valid name without numbers or special characters";
  }

  if (!validator.isAlpha(data.Address.replace(/[\s]+/g, ""))) {
    errors.Address =
      "Enter a valid address without numbers or special characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
