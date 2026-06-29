var areOccurrencesEqual = function (s) {
    let freqObj = {}
    for (let x of s) {
        freqObj[x] = (freqObj[x] ?? 0) + 1
    }
    let counts = [...Object.values(freqObj)]

    return (new Set(counts)).size === 1
};