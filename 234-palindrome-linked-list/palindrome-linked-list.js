var isPalindrome = function (head) {
	let ll = new LinkedList_({ head });
	let a = ll.toArray();
	return a.join('') === [...a].reverse().join('');
};

class ListNode {
	val;
	next;
	constructor(val_, next_) {
		this.val = val_ ?? 0;
		this.next = next_ ?? null;
	}
}

class LinkedList_ {
	head;
	// 		head(1) -> ln (2) -> ln (3) -> null
	constructor({ arr = [], head = null } = {}) {
		if (head) {
			this.head = head;
			return;
		}
		let prevln = null;
		for (let i = arr.length - 1; i >= 0; i--) {
			prevln = new ListNode(arr[i], prevln);
		}
		this.head = prevln;
	}
	indexOf(targetVal) {
		let { head } = this;

		for (let t = head, i = 0; t; t = t.next, i++) {
			if (t.val === targetVal) {
				return i;
			}
		}
		return -1;
	}
	insertAt(indexToAddAt, valueToAdd) {
		let { head } = this;

		if (indexToAddAt === 0) {
			this.head = new ListNode(valueToAdd, head);
			return head;
		}

		let prev = null;
		for (let t = head, i = 0; i < indexToAddAt; t = t.next, i++) {
			if (i + 1 === indexToAddAt) {
				t.next = new ListNode(valueToAdd, t.next);
				return t.next;
			}
			prev = t;
		}
		return null;
	}
	deleteNodeInPlace(node) {
		let prev = null;
		for (let t = node; t; t = t.next) {
			if (t.next) {
				t.val = t.next.val;
			} else {
				if (prev) {
					prev.next = prev.next.next;
				}
			}
			prev = t;
		}
		return null;
	}
	remove(targetVal) {
		let { head } = this;

		if (head.val === targetVal) {
			this.head = head.next;
			return;
		}
		let prev = null;
		for (let t = head; t; t = t.next) {
			if (t.val === targetVal) {
				prev.next = prev.next.next;
				return t;
			}
			prev = t;
		}
		return null;
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

		{
			let head = new ListNode();
			let n2 = new ListNode();
			let n3 = new ListNode();
			n3.val = 3;
			n2.val = 2;
			n2.next = n3;
			head.val = 1;
			head.next = n2;
		}
	}
}