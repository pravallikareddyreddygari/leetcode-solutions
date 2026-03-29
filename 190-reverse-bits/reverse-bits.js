const cl = console.log
//  s = s * 10 + d      decimal
//  s = s * 2 + d      binary

var reverseBits = function (n) {
    let res = 0;

    for (let i = 31; i >= 0; i--) {
        let ithBitValue = (n & (1 << i)) ? 1 : 0
        const placeValue = 2 ** (31 - i)
        res = res + (placeValue * ithBitValue)
    }

    return res;
};

var reverseBits3333333 = function (n) {
    let placeValue = 1
    let res = 0;

    for (let i = 31; i >= 0; i--) {
        let ithBitValue = (n & (1 << i)) ? 1 : 0
        res = res + (placeValue * ithBitValue)
        placeValue = 2 * placeValue
    }

    return res;
};

var reverseBits222222 = function (n) {
    let bins = n.toString(2).padStart(32, '0')
    let binsRev = bins.split("").reverse().join("")
    return parseInt(binsRev, 2)
};