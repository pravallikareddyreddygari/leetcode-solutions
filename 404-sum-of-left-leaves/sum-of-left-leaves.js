var sumOfLeftLeaves = function (root) {
    let s = 0

    function dfs(n, isLeft) {
        if (!n) return
        if (!n.left && !n.right) {
            // leaf
            if (isLeft) {
                // left leaf
                s += n.val
            }
        }
        dfs(n.left, true);
        dfs(n.right, false);
    }

    dfs(root, false)

    return s
};