var minimizeArrayValue = function (a) {
    let s = 0
    let c = 0
    let maxAvg = -Infinity
    for (let x of a) {
        s += x
        c++
        let avg = s / c
        maxAvg = Math.max(maxAvg, avg)
    }
    return Math.ceil(maxAvg)
};