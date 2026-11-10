var divide = function (dividend, divisor) {
    let res = dividend / divisor;
    if (res > 2 ** 31 - 1) return 2 ** 31 - 1;
    else return Math.trunc(res);
};