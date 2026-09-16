var average = function (salary) {
    salary.sort((a, b) => a - b)
    salary.shift()
    salary.pop()
    let n = salary.length
    let sum = salary.reduce((acc, x) => acc + x, 0)
    return sum / n
};