var deleteGreatestValue = function (grid) {
    let score = 0;
    let m = grid.length
    let n = grid[0].length
    let rowQueues = [];

    for (let i = 0; i < m; i++) {
        let maxPq = new PriorityQueue((a, b) => b - a)
        for (let v of grid[i]) {
            maxPq.enqueue(v)
        }
        rowQueues.push(maxPq)
    }

    for (let j = 0; j < n; j++) {
        let currentMax = 0

        for (let i = 0; i < m; i++) {
            const val = rowQueues[i].dequeue()
            currentMax = Math.max(currentMax, val)
        }
        score += currentMax
    }
    return score
};