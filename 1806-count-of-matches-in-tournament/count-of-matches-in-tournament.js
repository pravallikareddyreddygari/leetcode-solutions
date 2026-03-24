const cl = console.log
var numberOfMatches = function (n) {
    let totalSum = 0
    while (n > 1) {
        let Matches;
        let teamAdvance;
        if (n % 2 === 0) {
            Matches = n / 2
            teamAdvance = n / 2
            //cl(teamsAdvance)
        } else{
            Matches = (n - 1) / 2
            teamAdvance = (n - 1) / 2 + 1
            //cl(teamAdvance)
        }
        totalSum += Matches
            n = teamAdvance
    }
    return totalSum
}