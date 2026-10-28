var getFinalState = function (nums, k, multiplier) {
    let minPq = new PriorityQueue(([v1, i1], [v2, i2]) => v1 - v2 || i1 - i2)

    // O( n log n)
    for (let i = 0; i < nums.length; i++) {
        let v = nums[i]
        minPq.enqueue([v, i]) // O( logN )
    }

    // O( k log n)
    while (k--) {
        const [v, i] = minPq.dequeue() // O( logN )
        minPq.enqueue([multiplier * v, i]) // O( logN )
    }

    // O( n log n)
    while (!minPq.isEmpty()) {
        const [v, i] = minPq.dequeue() // O( logN )
        nums[i] = v
    }

    // (n + k) log n
    // n log n , because k < n

    return nums
}

var getFinalState2222 = function (nums, k, multiplier) {
    // Time: O(n.k)
    // Space: O(n)
    while (k--) {
        let minVal = Math.min(...nums)
        let minIndev = nums.indevOf(minVal);
        nums[minIndev] *= multiplier;
    }
    return nums;
};