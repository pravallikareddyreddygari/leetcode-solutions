
var maxSubsequence = function(nums, k) {
    let minPq = new MaxPriorityQueue({compare: (a,b) => a[0] - b[0] })

    for (let i = 0; i < nums.length; i++) {
        let v = nums[i]
        minPq.enqueue([v, i])
        if (minPq.size() > k) {
            minPq.dequeue()
        }
    }

    let res = []
    while (!minPq.isEmpty()) {
        res.push(minPq.dequeue())
    }
    res.sort((a, b) => a[1] - b[1])
    return res.map(x => x[0])
}; 
    