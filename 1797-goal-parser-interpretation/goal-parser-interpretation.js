var interpret = function (s) {
    let n = s.length

    let res = ''

    let i = 0
    while (i < n) {
        let x = s[i]
        if (x === 'G') {
            res += 'G'
            i++
        } else if (x === '(') {
            let next = s[i + 1]
            if (next === ')') {
                res += 'o'
                i = i + 2
            } else {
                res += 'al'
                i = i + 4
            }
        }
    }
    return res
};