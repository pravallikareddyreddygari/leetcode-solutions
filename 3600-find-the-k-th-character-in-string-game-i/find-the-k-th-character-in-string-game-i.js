function nextCircularStr(s) {
    let t = ''
    for (let ch of s) {
        if (ch === 'z') {
            t += 'a'
        } else {
            t += String.fromCharCode(ch.charCodeAt(0) /* 97 */ + 1)
        }
    }
    return t
}

var kthCharacter = function (k) {
    let w = 'a'
    if (k === 1) return w

    while (w.length < k) {
        w = w + nextCircularStr(w)
    }

    return w[k - 1]
};