
var findMissingElements = function (nums) {
    const numSet = new Set(nums)
    const missingNumbers = []
    if (nums.length === 0) {
        return []
    }
    const minVal = Math.min(...nums)
    const maxVal = Math.max(...nums)
    for (let i = minVal; i <= maxVal; i++) {
        if (!numSet.has(i)) {
            missingNumbers.push(i)
        }
    }
    return missingNumbers
}