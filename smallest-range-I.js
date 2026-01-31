var smallestRangeI = function (a, k) {
    a.sort((a, b) => a - b)
    let first = a[0]
    let last = a.at(-1)

    return (last - k) - (first + k) < 0 ? 0 : (last - k) - (first + k)
};