var clearDigits = function (s) {
    let stack = []
    const top = (stack) => stack.at(-1)

    let maxd = 0
    
    for (let ch of s) {
        if (/[a-z]/.test(ch)) {
            stack.push(ch) // add alphabet
        } else {
            // number
            if (/[a-z]/.test(top(stack))) {
                stack.pop() // remove alphabet
            } else {
                stack.push(ch) // add number
            }
   
        }
    }
    return stack.join("")
};