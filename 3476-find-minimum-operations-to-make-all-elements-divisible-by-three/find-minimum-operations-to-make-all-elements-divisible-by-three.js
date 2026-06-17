var minimumOperations = function (nums) {
    const count = nums
        .reduce((count, x) => count + (x % 3 ? 1 : 0), 0)
    return count
};