var findRelativeRanks = function(score) {
    let indexScores = score.map((s, index) => [s, index])
    indexScores.sort((a, b) => b[0] - a[0])
    let res = new Array(score.length)

    for (let i = 0; i < indexScores.length; i++) {

        let [currentScore, originalIndex] = indexScores[i];
        let rank = "";

        if (i === 0) {
            rank = "Gold Medal";
        } else if (i === 1) {
            rank = "Silver Medal";
        } else if (i === 2) {
            rank = "Bronze Medal";
        } else {
            rank = (i + 1).toString()
        }
        res[originalIndex] = rank;
    }

    return res
}
    