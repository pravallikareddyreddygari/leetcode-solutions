var minLength = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]
        const lastChar = stack[stack.length - 1]
        if ((currentChar === 'B' && lastChar === 'A') ||
            (currentChar === 'D' && lastChar === 'C')) {
            stack.pop()
        } else {
            stack.push(currentChar)
        }
    }
    return stack.length
}