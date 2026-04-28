var countStudents = function (students, sandwiches) {
    let stack = new Stack_(sandwiches.reverse())
    let queue = new Queue_(students)

    let prefMisMatchedCount = 0
    while (prefMisMatchedCount !== queue.size) {
        cl = console.log
        if (stack.peekTop() === queue.peekFront()) {
            stack.pop()
            queue.dequeue()
            prefMisMatchedCount = 0
            // cl(stack.peekTop(), queue.peekFront(), { stack, queue, prefMisMatchedCount })
        } else {
            queue.enqueue(queue.dequeue())
            prefMisMatchedCount++
            // cl({ stack, queue, prefMisMatchedCount })
        }
    }

    return queue.size
};

class Stack_ {
    arr = [];
    constructor(arr = []) {
        this.arr = arr;
    }
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
        return this.arr.join('');
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

class Queue_ {
    arr = [];
    constructor(arr = []) {
        this.arr = arr;
    }
    enqueue(x) {
        this.arr.push(x);
    }
    dequeue() {
        return this.arr.shift();
    }
    peekFront() {
        return this.arr[0];
    }
    peekRear() {
        return this.arr.at(-1);
    }
    isEmpty() {
        return this.arr.length === 0;
    }
    get size() {
        return this.arr.length;
    }
    demo() {
        let queue = new Queue();
        queue.enqueue(11);
        queue.enqueue(12);
        queue.peekFront(); // 11
        queue.enqueue(13);
        queue.peekRear(); // 13
        let x = queue.dequeue(); // 11
        queue.size; // 2
    }
}