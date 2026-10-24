var isValid = function (s) {
    let stack = []
    // const top = (stack) => stack.at(-1)
    let maxd = 0

    for (let ch of s) {
        if ('([{'.includes(ch)) {
            stack.push(ch)
        } else if (ch === ')') {
            if (!stack.length) return false
            if (stack.pop() !== '(') {
                return false
            }
        } else if (ch === ']') {
            if (!stack.length) return false
            if (stack.pop() !== '[') {
                return false
            }
        } else if (ch === '}') {
            if (!stack.length) return false
            if (stack.pop() !== '{') {
                return false
            }
        }
    }

    return stack.length === 0
};
