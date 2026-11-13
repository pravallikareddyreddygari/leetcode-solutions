var mergeAlternately = function (word1, word2) {
    let a1 = [...word1]
    let a2 = [...word2]

    let ans = []
    while (a1.length > 0 || a2.length > 0) {
        if (a1.length > 0) {
            ans.push(a1.shift())
        }
        if (a2.length > 0) {
            ans.push(a2.shift())
        }
    }
    return ans.join("")
};