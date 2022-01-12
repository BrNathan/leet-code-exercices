function isPalindrome(x: number): boolean {
  let reverseNumber: string = x.toString().split("").reverse().join("");
  return reverseNumber == x.toString();
};