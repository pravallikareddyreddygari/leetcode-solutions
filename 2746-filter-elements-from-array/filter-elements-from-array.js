var filter = function (arr, fn) {
    // return arr.filter((x, i) => fn(x, i))

    let res = []

    let n = arr.length
    for (let i = 0; i < n; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i])
        }
    }

    return res
};