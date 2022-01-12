function plusOne(digits: number[]): number[] {

  let retenue = 1;

  let reverseArray = [...digits].reverse();
  let resulArray = [];
  for (let index = 0; index < reverseArray.length; index++) {
      const element = reverseArray[index];

      let expectedValue = element + retenue;
      if (expectedValue < 10) {
          resulArray.push(expectedValue);
          retenue = 0;
      }
      else {
          resulArray.push(0);
          retenue = 1;
          if (index == reverseArray.length - 1) {
              resulArray.push(1);
              index++;
          }
      }
  }

  return resulArray.reverse();
};