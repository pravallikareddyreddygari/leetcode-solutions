function sumOfDigits(num) {
    let s = 0

    while (num) {
        s += num % 10
        num = Math.trunc(num / 10)
    }

    return s
}

var smallestIndex = function (nums) {
    let n = nums.length

    for (let i = 0; i < n; i++) {
        let x = nums[i]
        if (sumOfDigits(x) === i) {
            return i
        }
    }

    return -1
};