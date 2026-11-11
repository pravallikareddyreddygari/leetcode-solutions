var countOdds = function (low, high) {
    let diff = high - low
    let numOfOdds = Math.round((diff) / 2)

    if (diff % 2 === 0 && low % 2 === 1) numOfOdds++

    return numOfOdds
};