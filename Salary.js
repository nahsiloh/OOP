const { taxBracket } = require("./dataTax");

class Salary {
  constructor(monthlyIncome, months) {
    this.monthlyIncome = monthlyIncome;
    this.months = months;
  }

  calculateAnnualIncome() {
    return this.monthlyIncome * this.months;
  }
}

module.exports = Salary;
