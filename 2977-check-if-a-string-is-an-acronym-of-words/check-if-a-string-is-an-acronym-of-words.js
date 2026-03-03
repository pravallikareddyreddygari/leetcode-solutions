var isAcronym = function (words, target) {
    let s = ''
    for (let w of words) {
        s += w[0]
    }
    return s === target
};