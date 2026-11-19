var moveZeroes = function (a) {
    let start = 0
    let i
    for (i = 0; i < a.length; i++) {
        if (a[i] !== 0) {
            a[start++] = a[i]
        }
    }

    while (start < a.length) {
        a[start++] = 0
    }

    return start
};

var moveZeroes222222222 = function (a) {
    let b = a.filter(x => x !== 0)
    let c = a.filter(x => x === 0)

    for (let i = 0; i < a.length; i++) {
        if (b.length) {
            a[i] = b.shift()
        } else if (c.length) {
            a[i] = c.shift()
        }
    }
};