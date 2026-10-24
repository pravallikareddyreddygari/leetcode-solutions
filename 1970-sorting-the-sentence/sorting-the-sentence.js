var sortSentence = function (s) {
    let res = []
    let a = s.split(" ")
    for (let w of a) {
        let wl = w.length
        let first = w.slice(0, wl - 1)
        let lastIndex = +w.slice(wl - 1) - 1
        res[lastIndex] = first
    }
    return res.join(" ")

};