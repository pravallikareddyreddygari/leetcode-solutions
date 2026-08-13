let sumOfDigitsInStr = (s) => {
    let sum = 0
    for (let ch of s) {
        sum += +ch
    }
    return sum
}
var countSymmetricIntegers = function (low, high) {
    let ct = 0
    for (let x = low; x <= high; x += 1) {
        let s = ('' + x)
        if (s.length % 2 === 0) {
            let leftHalfStr = s.slice(0, s.length / 2)
            let rightHalfStr = s.slice(s.length / 2)
            if (sumOfDigitsInStr(leftHalfStr) === sumOfDigitsInStr(rightHalfStr)) {
                ct++
            }
        }
    }
    return ct
};