var halvesAreAlike = function (s) {
    s = s.toLowerCase()


    let n = s.length
    let half = n / 2

    let firstHalf = s.slice(0, half)
    let secondHalf = s.slice(half)

    let firstHalfVC = 0
    for (let ch of firstHalf) {
        if ('aeiou'.includes(ch)) {
            firstHalfVC++
        }
    }
    let secondHalfVC = 0
    for (let ch of secondHalf) {
        if ('aeiou'.includes(ch)) {
            secondHalfVC++
        }
    }

    return firstHalfVC === secondHalfVC
};