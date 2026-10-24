var sortList = function (head) {
    let vals = []

    let t = head
    while (t) {
        vals.push(t.val)
        t = t.next
    }

    vals.sort((a, b) => a - b)

    t = head
    while (t) {
        t.val = vals.shift()
        t = t.next
    }

    return head
}