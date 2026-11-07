var firstUniqChar = function (s) {
    let charCounts = {}
    for (let i = 0; i < s.length; i++) {

        let ch = s[i]
        charCounts[ch] = (charCounts[ch] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (charCounts[s[i]] === 1) {
            return i
        }
    }
    return -1
};