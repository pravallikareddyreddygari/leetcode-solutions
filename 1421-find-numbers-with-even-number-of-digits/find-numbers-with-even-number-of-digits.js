var findNumbers = function (a) {
    let c = 0
    for (let x of a) {
        let s = '' + x
        let digitCount = s.length
        if (digitCount % 2 === 0) {
            c++
        }
    }
    return c
};