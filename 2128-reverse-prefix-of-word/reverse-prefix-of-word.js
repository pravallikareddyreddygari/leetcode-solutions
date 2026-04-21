var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch)
    let prefix = word.substring(0, index + 1)
    let suffix = word.substring(index + 1)
    let reversedPrefix = prefix.split('').reverse().join('')
    return reversedPrefix + suffix

};