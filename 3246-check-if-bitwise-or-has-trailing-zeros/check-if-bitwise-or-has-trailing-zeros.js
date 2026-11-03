var hasTrailingZeros = function (nums) {
    let evenCount = nums.reduce((sum, x) => sum + ((x & 1) ? 0 : 1), 0)
    return evenCount >= 2
};

var hasTrailingZeros444 = function (nums) {
    let ct = 0
    for (let x of nums) {
        if ((x & 1) === 0) ct++
    }
    return ct >= 2
};

var hasTrailingZeros33333 = function (nums) {
    let evens = nums.filter(x => (x & 1) === 0)
    return evens.length >= 2
};

var hasTrailingZeros222222 = function (nums) {
    let evens = nums.filter(x => x % 2 === 0)
    return evens.length >= 2
};