var minimumOperations = function (nums) {
    const uniquePos = new Set()

    for (const num of nums) {
        if (num > 0) {
            uniquePos.add(num)
        }
    }
    return uniquePos.size
};
