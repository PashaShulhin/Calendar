document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("salary_range")
    .addEventListener("input", function () {
      document.getElementById("salaryValue").textContent = this.value;
    });
});

class Validator {
  static isEmail(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }
  static isName(value) {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ]{2,}$/;
    return nameRegex.test(value);
  }
  static validatePassword(password) {
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCheck && uppercaseCheck && numberCheck && specialCharCheck) {
      return true;
    }
    return false;
  }
  static isRequired(value) {
    return value && value.trim().length > 0;
  }
}
