var squareIsWhite = function (s) {
    let [ch, num] = s;
    num = +num
    let num2 = ch.charCodeAt() - 97;
    return (num + num2) % 2 === 0
}
var squareIsWhite22222 = function (s) {
    // s = "a1"
    const [ch, num] = s;
    const cc = ch.charCodeAt() - 97;
    const parityOfChar = (cc + 1) % 2; //   for a1, its 1
    const parityOfNum = num % 2; //         for a1, its 1
    return parityOfChar !== parityOfNum; // for a1, its false, is black
};