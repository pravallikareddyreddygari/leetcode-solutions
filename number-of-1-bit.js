var hammingWeight = function (n) {
    let binaryStr = n.toString(2)
    
    return binaryStr.replaceAll('0', '').length
};