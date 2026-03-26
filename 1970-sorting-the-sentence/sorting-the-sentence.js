const cl = console.log
var sortSentence = function (s) {
    let res = []
    let a = s.split(" ")
    // cl(s)
    // cl(a)
    for (let w of a) {
        let wl = w.length
        // 0, wl-2     wl-1
        let first = w.slice(0, wl - 1)
        let lastIndex = +w.slice(wl - 1) - 1
        // cl({ w, first, lastIndex })
        res[lastIndex] = first
    }
    // cl(res)
    return res.join(" ")

};