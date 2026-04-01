var maximum69Number = function (num) {
    let s = '' + num
    let a = s.split("")

    let index = a.indexOf('6')
    if (index !== -1) {
        a[index] = '9'
    }
    let s2 = a.join("")
    return +s2
};