const IncomeTaxCalculator = require("./IncomeTaxCalculator");
const Salary = require("./Salary");

describe("Income Tax Calculator", () => {
  it("should return 0 if the person has no annual income", () => {
    const newSalary = new Salary(0, 12);
    const annualIncome = newSalary.calculateAnnualIncome();
    const tax = 0;
    const incomeTax = new IncomeTaxCalculator(annualIncome);
    incomeTax.calculateTax();
    expect(incomeTax.getStatement()).toBe(tax);
  });

  describe("annual income is within the 5% tax bracket", () => {
    it("should return tax of 2.000.000IDR if annual income is 36.000.000IDR", () => {
      const newSalary = new Salary(3000000, 12);
      const annualIncome = newSalary.calculateAnnualIncome();
      const tax = 1800000;
      const incomeTax = new IncomeTaxCalculator(annualIncome);
      incomeTax.calculateTax();
      expect(incomeTax.getStatement()).toBe(tax);
    });

    it("should return tax of 2.500.000IDR if annual income is 50.400.000IDR", () => {
      const newSalary = new Salary(4200000, 12);
      const annualIncome = newSalary.calculateAnnualIncome();
      const tax = 2560000;
      const incomeTax = new IncomeTaxCalculator(annualIncome);
      incomeTax.calculateTax();
      expect(incomeTax.getStatement()).toBe(tax);
    });
  });

  describe("annual income is within the 15% tax bracket", () => {
    it("should return tax of 25.000.000IDR if annual income is 192.000.000IDR", () => {
      const newSalary = new Salary(16000000, 12);
      const annualIncome = newSalary.calculateAnnualIncome();
      const tax = 23800000;
      const incomeTax = new IncomeTaxCalculator(annualIncome);
      incomeTax.calculateTax();
      expect(incomeTax.getStatement()).toBe(tax);
    });
  });

  describe("annual income is within the 25% tax bracket", () => {
    it("should return tax of 45.000.000IDR if annual income is 300.000.000IDR", () => {
      const newSalary = new Salary(25000000, 12);
      const annualIncome = newSalary.calculateAnnualIncome();
      const tax = 45000000;
      const incomeTax = new IncomeTaxCalculator(annualIncome);
      incomeTax.calculateTax();
      expect(incomeTax.getStatement()).toBe(tax);
    });
  });

  describe("annual income is within the 30% tax bracket", () => {
    it("should return tax of 125.000.000IDR if annual income is 600.000.000IDR", () => {
      const newSalary = new Salary(50000000, 12);
      const annualIncome = newSalary.calculateAnnualIncome();
      const tax = 125000000;
      const incomeTax = new IncomeTaxCalculator(annualIncome);
      incomeTax.calculateTax();
      expect(incomeTax.getStatement()).toBe(tax);
    });
  });
});
