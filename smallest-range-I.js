var smallestRangeI = function (a, k) {

    a.sort((a, b) => a - b)
    let first = a[0]
    let last = a.at(-1)
    let diff = (last - k) - (first + k)
    
    return  diff < 0 ? 0 : diff
};