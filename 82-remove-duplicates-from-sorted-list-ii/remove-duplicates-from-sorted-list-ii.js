var deleteDuplicates = function (head) {
    let current = head;
    let prev = null;

    while (current !== null) {
        if (current.next !== null && current.val === current.next.val) {
            while (current.next !== null && current.val === current.next.val) {
                current = current.next;
            }
            if (prev === null) {
                head = current.next;
            } else {
                prev.next = current.next
            }
        } else {
            prev = current
        }
        current = current.next
    }
    return head
}