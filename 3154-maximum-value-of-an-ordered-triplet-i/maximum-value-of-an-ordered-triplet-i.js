const cl = console.log
var maximumTripletValue = function (nums) {
    let maxValue = 0
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let currentVal = (nums[i] - nums[j]) * nums[k]
                if (currentVal > maxValue) {
                    maxValue = currentVal
                }
            }
        }
    }
    return maxValue
};