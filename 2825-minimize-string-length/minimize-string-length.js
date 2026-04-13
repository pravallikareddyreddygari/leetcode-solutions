var minimizedStringLength = function (s) {
    let uniqueChars = new Set()
    for (let ch of s) {
        uniqueChars.add(ch)
    }
    return uniqueChars.size
}