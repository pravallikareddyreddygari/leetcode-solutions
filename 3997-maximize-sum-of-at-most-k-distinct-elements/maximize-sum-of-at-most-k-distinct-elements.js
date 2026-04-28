var maxKDistinct222 = function (a, k) {
    a = [... new Set(a)]
        .sort((a, b) => b - a)
    return a.slice(0, k)
};

var maxKDistinct = function (a, k) {
    a = [... new Set(a)].sort((a, b) => b - a)
    let n = a.length
    let res = []
    for (let i = 0; i < n && i < k; i++) {
        res.push(a[i])
    }
    return res
};