const cl = console.log
var maxPower = function (s) {
    let maxLength = 1
    let currLength = 1
    for (let i = 0; i < s.length; i++) {

        if (s[i] == s[i - 1]) currLength++
        else currLength = 1

        if (currLength > maxLength) maxLength = currLength
    }
    return maxLength
};