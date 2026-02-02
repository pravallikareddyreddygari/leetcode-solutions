var generateKey = function (num1, num2, num3) {

    let getFourLen0PaddedStr = (num) => ('' + num).padStart(4, '0')

    let s1 = getFourLen0PaddedStr(num1)
    let s2 = getFourLen0PaddedStr(num2)
    let s3 = getFourLen0PaddedStr(num3)
    let sMins = ''

    for (let i = 0; i < 4; i++) {
        sMins += Math.min(+s1[i], +s2[i], +s3[i])
    }

    return +sMins
};