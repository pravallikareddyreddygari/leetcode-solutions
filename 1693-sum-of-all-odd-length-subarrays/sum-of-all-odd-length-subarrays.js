var sumOddLengthSubarrays = function (arr) {
    let totalSum = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((j - i + 1) % 2 !== 0) {
                for (let k = i; k <= j; k++) {
                    totalSum += arr[k]
                }
            }
        }
    }
    return totalSum
};