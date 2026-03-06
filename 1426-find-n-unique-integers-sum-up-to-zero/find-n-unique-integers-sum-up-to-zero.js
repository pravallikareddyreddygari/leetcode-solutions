var sumZero = function (n) {
    //  6 (even)  // 6/2 = 3               // -3 -2 -1     1 2 3
    //  7 (odd)   // 7/2 = trunc(3.5) = 3  // -3 -2 -1  0  1 2 3
    const result = [];

    let half = Math.trunc(n / 2)
    for (let i = 1; i <= half; i++) {
        result.push(-i, i);
    }

    if (n % 2 === 1) {
        result.push(0); // push 0, if odd
    }

    return result;
};