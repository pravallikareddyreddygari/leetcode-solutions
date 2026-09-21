var maximumScore = function(nums, s) {
    let a = nums;
    let n = a.length;
    let score = 0;
    let pq = new PriorityQueue((a, b) => b - a);
    for (let i = 0; i < n; i++) {
        if (s[i] === '1') {
            pq.enqueue(a[i]);
            score += pq.dequeue();
        } else {
            pq.enqueue(a[i]);
        }
    }
    return score;
};