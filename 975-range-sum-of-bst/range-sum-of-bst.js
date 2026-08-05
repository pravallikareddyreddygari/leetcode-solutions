var rangeSumBST = function (root, low, high) {
    let s = 0

    function dfs(n) {
        if (!n) return

        if (low <= n.val && n.val <= high) {
            s += n.val
        }

        if (low < n.val) dfs(n.left);
        if (n.val < high) dfs(n.right);
    }

    dfs(root)
    return s
};