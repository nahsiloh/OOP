module.exports.taxBracket = {
  tierA: { taxRate: 0.05, lowerIncomeRange: 0, upperIncomeRange: 50000000 },
  tierB: {
    taxRate: 0.15,
    lowerIncomeRange: 50000000,
    upperIncomeRange: 250000000
  },
  tierC: {
    taxRate: 0.25,
    lowerIncomeRange: 250000000,
    upperIncomeRange: 500000000
  },
  tierD: {
    taxRate: 0.3,
    lowerIncomeRange: 500000000,
    upperIncomeRange: Number.MAX_SAFE_INTEGER
  }
};
