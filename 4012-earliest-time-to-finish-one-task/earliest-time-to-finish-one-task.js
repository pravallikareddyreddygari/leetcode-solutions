var earliestTime = function (tasks) {
    let minimumEndTime = Infinity
    for (let [startTime, duration] of tasks) {
        const endTime = startTime + duration
        minimumEndTime = Math.min(minimumEndTime, endTime)
    }
    return minimumEndTime
};