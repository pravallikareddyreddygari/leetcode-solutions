var sumBase = function (n, k) {
    let sumOfDigits = 0;
    while (n) {
        sumOfDigits += n % k; // last digit, base k division
        n = Math.trunc(n / k) // remove last digit, base k division
    }
    return sumOfDigits;
};