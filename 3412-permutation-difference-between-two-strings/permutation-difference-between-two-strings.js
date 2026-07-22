var findPermutationDifference = function (s, t) {
    let pos = []
    for (let i = 0; i < s.length; i++) {
        pos[s[i]] = i;
    }
    
    let diff = 0;
    for (let i = 0; i < t.length; i++) {
        diff += Math.abs(pos[t[i]] - i);
    }
    return diff;

} 