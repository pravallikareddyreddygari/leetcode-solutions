var sumOfUnique = function (nums) {

    let freqObj = {}
    for (let x of nums) {
        freqObj[x] = (freqObj[x] ?? 0) + 1
    }

    let sum = 0
    for (let [x, count] of Object.entries(freqObj)) {
        if (count === 1) {
            sum += +x
        }
    }
    return sum
};