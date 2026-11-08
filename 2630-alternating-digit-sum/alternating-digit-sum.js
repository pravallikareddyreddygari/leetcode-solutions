var alternateDigitSum = function (n) {
    let sum = 0;
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        let digit = Number(str[i]);

        if (i % 2 === 0) {
            sum += digit;
        } else {
            sum -= digit;
        }
    }
    return sum;
};