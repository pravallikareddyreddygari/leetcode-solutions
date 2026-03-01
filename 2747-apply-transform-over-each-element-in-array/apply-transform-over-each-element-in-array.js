var map = function (arr, fn) {
    return arr.map((x, i) => fn(x, i))
};