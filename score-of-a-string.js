var scoreOfString = function (s) {
    let Asciivalues = []
    let res = []
    for (let i = 0; i < s.length; i++) {
        let values = s.charCodeAt(i)
        Asciivalues.push(values)
    }
    for (let j = 0; j < Asciivalues.length - 1; j++) {
        let newAscii = Math.abs(Asciivalues[j] - Asciivalues[j + 1])
        res.push(newAscii)
    }
    
    let sum = 0
    for (let q = 0; q < res.length; q++) {
        sum += res[q];
    }

    return sum
};