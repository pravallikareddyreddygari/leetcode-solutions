var countAsterisks = function (s) {
    let a = s.split("|")
    let n = a.length
    let total = 0
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            let ss = a[i] // e**
            let starC = ss.length - ss.replaceAll('*', '').length
            total += starC
        }
    }
    return total
};