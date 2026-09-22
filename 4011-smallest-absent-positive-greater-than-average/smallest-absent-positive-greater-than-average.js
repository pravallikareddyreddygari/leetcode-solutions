var smallestAbsent = function (nums) {
    let n = nums.length
    let sum = nums.reduce((a, b) => a + b)
    let avg = Math.floor(sum / n)
    let set = new Set(nums)
    let smallabs = Math.max(1,avg + 1)
    while (set.has(smallabs)) {
        smallabs++
    }
    return smallabs
};