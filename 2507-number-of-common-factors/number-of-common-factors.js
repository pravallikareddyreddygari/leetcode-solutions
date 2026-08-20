var commonFactors = function (a, b) {
    let count = 0;
    for (let d = 1; d <= Math.min(a, b); d++) {
        if ((a % d === 0) && (b % d === 0)) {
            count++
        }
    }
    return count;
};