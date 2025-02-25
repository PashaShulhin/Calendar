document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("salary_range")
    .addEventListener("input", function () {
      document.getElementById("salaryValue").textContent = this.value;
    });
});

class Validator {
  static isEmailValid(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(value);
    return isValid;
  }

  static isNameValid(value) {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ]{2,}$/;
    const isValid = nameRegex.test(value);
    return isValid;
  }
  static validatePasswordValid(password) {
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const lengthCheck = lengthRegex.test(password);
    const uppercaseCheck = uppercaseRegex.test(password);
    const numberCheck = numberRegex.test(password);
    const specialCharCheck = specialCharRegex.test(password);

    const isValidPassword =
      lengthCheck && uppercaseCheck && numberCheck && specialCharCheck;
    return isValidPassword;
  }

  static isRequiredValid(value) {
    return value && value.trim().length > 0;
  }
}
