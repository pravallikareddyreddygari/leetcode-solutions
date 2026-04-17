function getDigits(n) {
    let digits = []
    while (n > 0) {
        let lastDigit = n % 10
        digits.push(lastDigit)

        n = Math.trunc(n / 10)
    }
    return digits
}
var subtractProductAndSum = function (n) {
    let digits = getDigits(n)
    // cl = console.log
    // cl(digits)

    return digits.reduce((prod, x) => prod * x, 1)
        - digits.reduce((sum, x) => sum + x, 0)
};