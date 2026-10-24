var prefixCount = function (words, pref) {
    let count = 0
    for (let w of words) {
        if (w.startsWith(pref)) {
            count++
        }
    }
    return count
};