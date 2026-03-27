var sumOfSquares = function (nums) {
    let sum = 0
    let numslen = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (numslen % (i + 1) === 0) {
            sum = sum + (nums[i] * nums[i])
        }
    }
    return sum
};
