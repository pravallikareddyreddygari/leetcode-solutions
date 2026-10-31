var minCosts = function (cost) {
    let res = []
    for (let i = 0; i < cost.length; i++) {
        if (cost[i] < cost[i + 1]) {
            cost[i + 1] = cost[i]
        }
        res.push(cost[i])
    }
    return res
};