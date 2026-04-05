var separateDigits = function (nums) {
    let res = []
    for (let x of nums) {
        let digits = ('' + x).split("")
        res.push(...digits)
    }
    return res.map(x => +x)
};