function getDigitSum(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

var minElement = function (nums) {
    let minSum = Infinity
    for (let i = 0; i < nums.length; i++) {
        let currentSum = getDigitSum(nums[i])
        minSum = Math.min(minSum, currentSum)
    }
    return minSum
}