var pivotInteger = function (n) {
    let s = 0;
    const prefixSum = [];
    for (let l = 1; l <= n; l++) {
        s += l;
        prefixSum.push(s);
    }

    const suffixSum = [];
    s = 0;
    for (let r = n; r >= 1; r--) {
        s += r;
        suffixSum.unshift(s);
    }

    for (let i = 0; i < n; i++) {
        if (prefixSum[i] === suffixSum[i]) {
            return i + 1;
        }
    }
    return -1;
};


var pivotInteger22222 = function (n) {
    let s = 0;
    let sum2 = (n * (n + 1)) / 2;
    for (let l = 1, r = n; l <= n; l++, r--) {
        s += l;
        sum2 -= r;
        if (s === sum2) {
            return l;
        }
    }
    return -1;
};