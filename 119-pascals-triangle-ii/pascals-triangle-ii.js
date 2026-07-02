var getRow = function (rowIndex) {
    let res = []
    let n = rowIndex + 1

    let firstRow = [1]
    res.push(firstRow)
    if (n === 1) return res[rowIndex]

    let secondRow = [1, 1]
    res.push(secondRow)
    if (n === 2) return res[rowIndex]

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

    return res[rowIndex]
};