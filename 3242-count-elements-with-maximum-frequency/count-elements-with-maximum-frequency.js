var maxFrequencyElements = function (nums) {
    let counts = {}
    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1
    }

    let maxFreq = 0
    for (let num in counts) {
        if (counts[num] > maxFreq) {
            maxFreq = counts[num]
        }
    }

    let totalFrequencies = 0
    for (let num in counts) {
        if (counts[num] === maxFreq) {
            totalFrequencies += counts[num]
        }
    }
    return totalFrequencies
};