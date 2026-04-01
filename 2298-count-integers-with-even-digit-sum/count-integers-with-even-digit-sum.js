var getSumAndProductOfDigits = function (n) {
    let sum = 0
    let product = 1
    while (n) {
        let rem = n % 10
        sum += rem
        product *= rem
        n = Math.trunc(n / 10)
    }
    return { sum, product }
}

var countEven = function (num) {
    let count = 0;

    for (let n = 1; n <= num; n++) {
        let { sum } = getSumAndProductOfDigits(n)
        count += sum % 2 === 0;
    }

    return count;
};