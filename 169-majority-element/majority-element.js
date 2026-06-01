var majorityElement = function (a) {
    let n = a.length;
    let half = n / 2

    let freq = {};
    for (let e of a) {
        freq[e] = (freq[e] ?? 0) + 1;
        if (freq[e] > half) {
            return e;
        }
    }
};