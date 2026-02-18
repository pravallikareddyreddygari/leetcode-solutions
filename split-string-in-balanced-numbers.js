var balancedStringSplit = function (s) {
    let balancedCount = 0
    let left = 0
    let right = 0
    for (let ch of s) {
        if (ch === 'L') left++
        if (ch === 'R') right++
        if (left === right) {
            balancedCount++
        }
    }
    return balancedCount
};
