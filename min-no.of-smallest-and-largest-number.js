var minimumAverage = function (nums) {
    let avg = []
    let res = []
    let p = [...nums].sort((a, b) => a - b)
    for (let i = 0; i < p.length; i++) {
        while (p.length > 0) {
            let minimumValue = p.shift()
            //cl(minimumValue)
            let maximumValue = p.pop()
            //cl(maximumValue)
            let average = (minimumValue + maximumValue) / 2
            avg.push(average)
        }
    }
    
    return Math.min(...avg)
};