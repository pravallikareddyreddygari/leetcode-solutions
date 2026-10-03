var middleNode = function (head) {
    let firstNode = head
    let current = head
    while (current && current.next) {

        firstNode = firstNode.next
        current= current.next.next
    }
    return firstNode
};