var numJewelsInStones = function (jewels, stones) {
    let count = 0

    for (const stone of stones) {
        for (const jewel of jewels) {
            if (stone === jewel) {
                count++
            }
        }
    }

    return count
}

