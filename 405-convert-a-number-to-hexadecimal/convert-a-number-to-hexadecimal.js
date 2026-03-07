var toHex = function (num) {
    if (num < 0) {
        num = num >>> 0
    }
    return num.toString(16)
};

var toHex = function (num) {
    const hexDigits = '0123456789abcdef'

    let res = []
    while (num) {
        let last4Bits = num & 0b1111
        res.push(hexDigits[last4Bits])
        num = num >>> 4
    }
    let s = res.reverse().join("")
    return s || "0"
}