var missingMultiple = function (nums, k) {
    for (let i = k; ; i += k) {
        if (!nums.includes(i)) {
            return i
        }
    }
};