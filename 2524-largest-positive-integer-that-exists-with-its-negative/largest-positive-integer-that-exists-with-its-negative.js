const cl = console.log
var findMaxK = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === -nums[j]) {
                res.push(Math.abs(nums[i]))
                break
            }
        }
    }
    if (res.length == 0) {
        return -1
    }
    return Math.max(...res)

};