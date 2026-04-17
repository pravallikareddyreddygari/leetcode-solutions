var maxDepth = function (root) {

    function dfs(n) {
        if (!n) return 0;

        let lRes = dfs(n.left);
        let rRes = dfs(n.right);

        return 1 + Math.max(lRes, rRes)
    }

    return dfs(root)
};