var distributeCandies = function (n, candyLimitPerChild) {
    let total = 0;

    for (let c1 = 0; c1 <= candyLimitPerChild; c1++) {
        for (let c2 = 0; c2 <= candyLimitPerChild; c2++) {
            for (let c3 = 0; c3 <= candyLimitPerChild; c3++) {

                if (c1 + c2 + c3 === n) {
                    // n candies are distributed to 3 children
                    total++;
                }
            }
        }
    }

    return total; // total number of ways to distribute
};