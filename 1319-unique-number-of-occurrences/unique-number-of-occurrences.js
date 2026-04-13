var uniqueOccurrences = function (nums) {
    let freqObj = {}
    for (let x of nums) {
        freqObj[x] = (freqObj[x] ?? 0) + 1
    }

    let vals = [...Object.values(freqObj)]
    let valsSet = new Set(vals)
    return vals.length === valsSet.size
};