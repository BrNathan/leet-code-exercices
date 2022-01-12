
const tablet = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

function intToRoman(num: number): string {
  let romanValue = "";

  let arrayTo = num.toString().split("");

  for (const val of tablet.keys()) {
    while (num >= val) {
      romanValue += tablet.get(val);
      num -= val;
    }
  }

  return romanValue;
};