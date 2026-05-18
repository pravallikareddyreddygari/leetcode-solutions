var getSumAndProductOfDigits = function (n) {
    let sumOfDigits = 0;
    let productOfDigits = 1;
    while (n) {
        let rem = n % 10;
        sumOfDigits += rem;
        productOfDigits *= rem;
        n = Math.trunc(n / 10);
    }
    return { sumOfDigits, productOfDigits };
};


var addDigits = function (num) {
    // while 2 or more digits
    while (num >= 10) {
        
        let { sumOfDigits } = getSumAndProductOfDigits(num)
        num = sumOfDigits
    }

    return num // 1 digit
};