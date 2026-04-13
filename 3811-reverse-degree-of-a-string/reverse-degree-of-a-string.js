var reverseDegree = function (s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let revIndex = 27 - (s[i].charCodeAt() - 96)
        total += revIndex * (i + 1);
    }

    return total;
}