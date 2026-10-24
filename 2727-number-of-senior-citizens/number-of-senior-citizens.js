var countSeniors = function (a) {
    let c = 0
    for (let info of a) {
        let age = +info.slice(11, 13)
        if (age > 60) {
            c++
        }
    }
    return c
};