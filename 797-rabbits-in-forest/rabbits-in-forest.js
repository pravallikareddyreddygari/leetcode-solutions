var numRabbits = function (answers) {
    let f = {}
    for (let sameColorLikeMeCount of answers) {
        let totalMembersInGroup = sameColorLikeMeCount + 1
        f[totalMembersInGroup] = (f[totalMembersInGroup] ?? 0) + 1
    }

    let s = 0
    for (let [totalMembersInGroup, countOfRabbits] of Object.entries(f)) {
        let numOfGroups = Math.ceil(countOfRabbits / totalMembersInGroup)
        s += numOfGroups * totalMembersInGroup
    }
    return s
};