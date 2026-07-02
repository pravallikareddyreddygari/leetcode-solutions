var generate = function (n) {
    let res = []

    let firstRow = [1]
    res.push(firstRow)
    if (n === 1) return res

    let secondRow = [1, 1]
    res.push(secondRow)
    if (n === 2) return res

    for (let R = 3; R <= n; R++) {
        const prevRow = res.at(-1)
        let newRow = []
        newRow.push(1)
        for (C = 0; C + 1 < prevRow.length; C++) {
            newRow.push(prevRow[C] + prevRow[C + 1])
        }
        newRow.push(1)
        res.push(newRow)
    }

    return res
};