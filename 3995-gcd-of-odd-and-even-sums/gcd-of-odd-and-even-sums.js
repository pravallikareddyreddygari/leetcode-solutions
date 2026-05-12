const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
}

var gcdOfOddEvenSums = function (n) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 1; n--; i += 2) {
        sumOdd += i
        sumEven += i + 1;
    }

    return gcd(sumEven, sumOdd);
};