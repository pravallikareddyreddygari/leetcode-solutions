var removeOuterParentheses = function (s) {
    let res = ''

    let t = ''
    let obc = 0
    let cbc = 0
    for (let ch of s) {
        t += ch
        if (ch === '(') {
            obc++
        } else {
            cbc++
        }

        if (obc === cbc) {
            res += t.slice(1, t.length - 1)

            t = ''
            obc = 0
            cbc = 0
        }
    }
    return res
};