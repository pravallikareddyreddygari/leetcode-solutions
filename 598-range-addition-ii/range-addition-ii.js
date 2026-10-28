let cl = console.log
let ct = console.table

var maxCount = function (m, n, ops) {
    let minX = m
    let minY = n
    for (let [x, y] of ops) {
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
    }
    return minX * minY
}

var maxCount222222 = function (m, n, ops) {
    let g = Array.from({ length: m }, () => new Array(n).fill(0))
    // ct(g)

    let maxCell = 0
    for (let [x, y] of ops) {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                g[i][j]++
                maxCell = Math.max(maxCell, g[i][j])
            }
        }
        ct(g)
    }

    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === maxCell) {
                count++
            }
        }
    }

    return count
};