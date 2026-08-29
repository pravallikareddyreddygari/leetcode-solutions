var findCenter = function (edges) {
    let E = edges.length // 3
    let V = E + 1 // 4
    let indegree = {}
    let outdegree = {}
    for (let [u, v] of edges) {
        // u   ->   v
        outdegree[u] = (outdegree[u] ?? 0) + 1
        indegree[v] = (indegree[v] ?? 0) + 1
        // u   <-   v
        outdegree[v] = (outdegree[v] ?? 0) + 1
        indegree[u] = (indegree[u] ?? 0) + 1
    }
    for (let u = 1; u <= V; u++) {
        if (indegree[u] === E) {
            return u
        }
    }
};