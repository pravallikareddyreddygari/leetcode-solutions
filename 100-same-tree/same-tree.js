var isSameTree = function (proot, qroot) {
    function dfs(p, q) {
        if (!p && !q) return true
        if (p && !q) return false
        if (!p && q) return false
        if (p.val !== q.val) return false
        let lRes = dfs(p.left, q.left);
        let rRes = dfs(p.right, q.right);
        return lRes && rRes
    }
    return dfs(proot, qroot)
};
