var kidsWithCandies = function (candies, extraCandies) {
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        let sum = candies[i] + extraCandies
        let max = Math.max(...candies);
        if (sum >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}