var isPalindrome = function (x) {
    let num = String(x);
    let rev = num.split("").reverse().join("");
    if (num === rev)  return true
    else return false;
};