var getSumOfDigitSquared = function (n) {
    let sumOfDigitSquared = 0;
    while (n) {
        let rem = n % 10;
        sumOfDigitSquared += rem ** 2;
        n = Math.trunc(n / 10);
    }
    return { sumOfDigitSquared };
};

var isHappy = function (n) {
    let seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);

        let { sumOfDigitSquared } = getSumOfDigitSquared(n);
        n = sumOfDigitSquared;
    }

    return true;
};