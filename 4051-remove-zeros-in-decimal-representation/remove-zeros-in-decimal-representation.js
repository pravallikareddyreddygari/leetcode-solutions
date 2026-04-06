var removeZeros = function (n) {
    let s = ('' + n).replaceAll('0', '')
    return +s
};