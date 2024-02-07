const sum = require("./script");

// it("Amount less than 50 ", () => {
//   expect(calculateBonus(10, 8)).toBe(18);
// });

// it("Amount more than 50 ", () => {
//   expect(calculateBonus(48, 8)).toBe(50);
// });

test("Amount less than 50 ", () => {
   expect(sum(10, 8)).toBe(18);
});
