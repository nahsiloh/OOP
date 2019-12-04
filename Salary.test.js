const Salary = require("./Salary");

describe("Salary", () => {
  it("should return 0 if the person has no monthly income ", () => {
    const newSalary = new Salary(0, 12);
    expect(newSalary.calculateAnnualIncome()).toBe(0);
  });

  it("should return 36,000,000IDR if the person has monthly income of 3000IDR ", () => {
    const newSalary = new Salary(3000000, 12);
    expect(newSalary.calculateAnnualIncome()).toBe(36000000);
  });
});
