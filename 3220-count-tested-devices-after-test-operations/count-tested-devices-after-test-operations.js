var countTestedDevices = function (batteryPercentage) {
    let testedCount = 0
    for (let i = 0; i < batteryPercentage.length; i++) {
        if (batteryPercentage[i] > testedCount) {
            testedCount++
        }
    }
    
    return testedCount
};