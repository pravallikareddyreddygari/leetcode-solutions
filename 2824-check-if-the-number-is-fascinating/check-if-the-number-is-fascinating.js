var isFascinating = function (n) {
    let s = '' + n + 2 * n + 3 * n;
    let set = new Set(s);

    if (set.has('0')) return false; // shud not have 0

    // 1-9, exactly once
    return s.length === 9 && set.size === 9;
};