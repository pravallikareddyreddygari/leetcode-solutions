var maxAdjacentDistance = function (nums) {
    let res = []
    let n = nums.length

    for (let i = 0; i < n; i++) {
        let adjacentIndex = (i + 1) % n
        let diff = Math.abs(nums[i] - nums[adjacentIndex])
        res.push(diff)
    }
    return Math.max(...res)
};