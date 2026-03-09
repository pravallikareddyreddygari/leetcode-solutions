function differenceOfSums(num1, num2) {
  let notdivisible = 0; 
  let divisible =0;

  for (let i = 1; i <= num1; i++) {
    if (i % num2 === 0) {
      divisible += i;
    } else {
      notdivisible += i;
    }
  }
        return notdivisible - divisible;
};