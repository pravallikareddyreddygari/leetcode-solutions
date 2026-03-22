var areNumbersAscending = function (s) {
    let digits = s.match(/\d+/g).map(Number)
    for (let i = 1; i < digits.length; i++) {
        if (digits[i] <= digits[i - 1]) {
            return false
        }
    }
    return true
};