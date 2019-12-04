const { taxBracket } = require("./dataTax");

const MIN_INCOME_TAX = 0;
const MIN_INCOME = 0;

class IncomeTaxCalculator {
  constructor(income) {
    this.income = income;
    this.incomeTax = MIN_INCOME_TAX;
  }

  tierATaxBracket(income) {
    const incomeRangeForTierA =
      taxBracket.tierA.upperIncomeRange - taxBracket.tierA.lowerIncomeRange;
    this.incomeTax = income * taxBracket.tierA.taxRate;
    this.income = Math.max(MIN_INCOME, (this.income -= incomeRangeForTierA));
  }

  tierBTaxBracket(income) {
    const incomeRangeForTierB =
      taxBracket.tierB.upperIncomeRange - taxBracket.tierB.lowerIncomeRange;
    this.incomeTax += income * taxBracket.tierB.taxRate;
    this.income = Math.max(MIN_INCOME, (this.income -= incomeRangeForTierB));
  }

  tierCTaxBracket(income) {
    const incomeRangeForTierC =
      taxBracket.tierC.upperIncomeRange - taxBracket.tierC.lowerIncomeRange;
    this.incomeTax += income * taxBracket.tierC.taxRate;
    this.income = Math.max(MIN_INCOME, (this.income -= incomeRangeForTierC));
  }

  tierDTaxBracket(income) {
    this.incomeTax += income * taxBracket.tierD.taxRate;
    this.income = MIN_INCOME;
  }

  calculateTax() {
    if (this.income === MIN_INCOME) {
      this.incomeTax = MIN_INCOME_TAX;
    } else if (this.income <= taxBracket.tierA.upperIncomeRange) {
      this.tierATaxBracket(this.income);
    } else if (this.income <= taxBracket.tierB.upperIncomeRange) {
      this.tierATaxBracket(taxBracket.tierA.upperIncomeRange);
      this.tierBTaxBracket(this.income);
    } else if (this.income <= taxBracket.tierC.upperIncomeRange) {
      this.tierATaxBracket(taxBracket.tierA.upperIncomeRange);
      this.tierBTaxBracket(
        taxBracket.tierB.upperIncomeRange - taxBracket.tierA.upperIncomeRange
      );
      this.tierCTaxBracket(this.income);
    } else if (taxBracket.tierD.lowerIncomeRange < this.income) {
      this.tierATaxBracket(taxBracket.tierA.upperIncomeRange);
      this.tierBTaxBracket(
        taxBracket.tierB.upperIncomeRange - taxBracket.tierA.upperIncomeRange
      );
      this.tierCTaxBracket(
        taxBracket.tierC.upperIncomeRange - taxBracket.tierB.upperIncomeRange
      );
      this.tierDTaxBracket(this.income);
    }
    return this.incomeTax;
  }

  getStatement() {
    return this.incomeTax;
  }
}

module.exports = IncomeTaxCalculator;
