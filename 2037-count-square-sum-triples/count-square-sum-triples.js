const cl = console.log
var countTriples = function (n) {
    let count = 0
    for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            let cSquare = a * a + b * b
            let c = Math.sqrt(cSquare)
            if (c <= n && Number.isInteger(c)) {
                count++;
            }
        }
    }
    return count
};