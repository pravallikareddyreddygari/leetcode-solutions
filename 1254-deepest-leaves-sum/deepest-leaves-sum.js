const cl = console.log
var deepestLeavesSum = function (root) {
    let deepestSum = 0;
    let maxDepth = 0;
    function dfs(node, currentDepth) {
        if (!node) return
        if (currentDepth > maxDepth) {
            maxDepth = currentDepth
            deepestSum = node.val
        } else if (currentDepth === maxDepth) {
            deepestSum += node.val
        }
        dfs(node.left, currentDepth + 1)
        dfs(node.right, currentDepth + 1)
    }
    dfs(root, 0);
    return deepestSum;
}