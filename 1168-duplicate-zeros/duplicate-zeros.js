var duplicateZeros = function (a) {
    let n = a.length
    let res = []
    for (let x of a) {
        // cl({ x, cond1: x === 0 })

        if (x === 0) {
            res.push(x)
            res.push(x)
        } else {
            res.push(x)
        }
        // cl({ res })
    }
    //cl({ res })

    // copy to original array
    for (let i = 0; i < n; i++) {
        a[i] = res[i]
    }
    //cl({ a })
    return a
};