var arrangeCoins = function (n) {
    let i = 1

    while (n - i >= 0) {
        n = n - i
        i++
    }
    return i - 1
};