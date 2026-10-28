var findNonMinOrMax = function (a) {
    a.sort((a, b) => a - b)
    a.shift()
    a.pop()
    return a[0] ?? -1
};