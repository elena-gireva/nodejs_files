const calculateBonus = require("./script");

it("Amount less than 50 ", () => {
  expect(calculateBonus(-20, 50)).toBe(30);
  expect(calculateBonus(0, 0)).toBe(0);
  expect(calculateBonus(40, 9)).toBe(49);
});

it("Amount more than 50 ", () => {
  expect(calculateBonus(30, 25)).toBe(50);
  expect(calculateBonus(40, 11)).toBe(50);
  expect(calculateBonus(-30, 90)).toBe(50);
});
it("Amount equals 50 ", () => {
  expect(calculateBonus(30, 20)).toBe(50);
  expect(calculateBonus(50, 0)).toBe(50);
  expect(calculateBonus(-50, 100)).toBe(50);
});
