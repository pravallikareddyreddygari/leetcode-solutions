var isPalindrome = function (s) {
    s = s.toLowerCase();
    let t = "";
    for (let ch of s) {
        if (/[a-z0-9]/.test(ch)) {
            t += ch;
        }
    }

    let tRev = t.split("").reverse().join("");
    return t === tRev;
};