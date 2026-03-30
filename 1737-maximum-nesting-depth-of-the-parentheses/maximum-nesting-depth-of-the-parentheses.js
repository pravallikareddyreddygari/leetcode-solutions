var maxDepth = function (s) {
    let stack = []
    // const top = (stack) => stack.at(-1)
    let maxd = 0

    for (let ch of s) {
        if (ch === '(') {
            stack.push(ch)
            maxd = Math.max(maxd, stack.length)
        } else if (ch === ')') {
            stack.pop()
        }
    }

    return maxd
};

var maxDepth2222222 = function (s) {
    let maxd = 0
    let d = 0

    for (let ch of s) {
        if (ch === '(') {
            d++
            maxd = Math.max(maxd, d)
        } else if (ch === ')') {
            d--
        }
    }

    return maxd
};
