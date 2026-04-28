var finalPrices = function (prices) {
    res = []
    for (let i = 0; i < prices.length; i++) {
        let discount = 0
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                discount = prices[j]
                break;
            }
        }
        res.push(prices[i] - discount);
    }
    return res;
};
