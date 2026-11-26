var findTheArrayConcVal = function (nums) {
    let total = 0
    while (nums.length > 0) {

        if (nums.length > 1) {
            let first = nums.shift()
            let last = nums.pop()
            let concatVal = Number(String(first) + String(last))
            total += concatVal
        } else {
            total += nums.shift()
        }
    }
    return total
};