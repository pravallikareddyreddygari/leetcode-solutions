const cl = console.log
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let minDiff = Infinity
    let res = []

    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1]
        if (diff < minDiff) {
            minDiff = diff
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            res.push([arr[i - 1], arr[i]])
        }
    }
    return res
}