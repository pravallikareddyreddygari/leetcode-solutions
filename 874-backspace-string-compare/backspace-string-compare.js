function process(s) {
    let stack = new Stack_()

    for (let ch of s) {
        if (ch === '#') {
            if (!stack.isEmpty()) {
                stack.pop()
            }
        } else {
            stack.push(ch)
        }
    }

    return stack.toString()
}

var backspaceCompare = function (s, t) {
    return process(s) === process(t)
}

class Stack_ {
    arr = [];
    push(x) {
        this.arr.push(x);
    }
    pop(x) {
        return this.arr.pop();
    }
    peekTop() {
        return this.arr.at(-1);
    }
    isEmpty() {
        return this.arr.length === 0;
    }
    get size() {
        return this.arr.length;
    }
    toString() {
        return this.arr.toString();
    }
    demo() {
        let stack = new Stack();
        stack.push(11);
        stack.push(12);
        stack.peekTop(); // 12
        stack.push(13);
        stack.peekTop(); // 13
        let x = stack.pop(); // 13
        stack.size; // 3
    }
}