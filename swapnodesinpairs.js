var swapPairs = function (head) {
    let ll = new LinkedList_({ head });
    return ll.swapPairs();
}
    swapPairs() {
        let { head } = this;
        let savehead;
        if (head && head.next) {
            savehead = head.next;
        }
        let save;
        let tPrev;
        for (let t = head; t && t.next; t = t.next) {
            if (tPrev) {
                tPrev.next = t.next;
            }
            let save = t.next.next;
            t.next.next = t;
            t.next = save;
            tPrev = t;
        }
        if (savehead) {
            this.head = savehead;
        }
        return this.head;
    }
    toArray() {
        let { head } = this;
        let vals = [];
        for (let t = head; t; t = t.next) {
            vals.push(t.val);
        }
        return vals;
    }
    fromArrayOverwriteValues(arr) {
        let { head } = this;

        for (let t = head, i = 0; t; t = t.next, i++) {
            t.val = arr[i];
        }
        return null;
    }
    demo() {
        {
            let head = null;
            let ll = new LinkedList_([], head);
        }
        {
            let n3 = new ListNode(3);
            let n2 = new ListNode(2, n3);
            let head = new ListNode(1, n2);
        }
    }
}

function isEqualOrIncreasing(a) {
    let nums = a;
    for (let i = 1; i < nums.length; i++) {
        if (a[i - 1] > a[i]) {
            return false;
        }
    }
    return true;
}

var minimumPairRemoval = function (nums) {
    let a = nums;
    let ct = 0;
    while (1) {
        if (isEqualOrIncreasing(a)) {
            break;
        }
        ct++;
        let mins = Infinity;
        let minsi = undefined;

        for (let i = 1; i < nums.length; i++) {
            let s = a[i - 1] + a[i];
            if (s < mins) {
                mins = s;
                minsi = i;
            }
        }
        
        if (minsi !== undefined) {
            a[minsi - 1] = a[minsi - 1] + a[minsi];
            a.splice(minsi, 1);
        }
    }

    return ct;
};