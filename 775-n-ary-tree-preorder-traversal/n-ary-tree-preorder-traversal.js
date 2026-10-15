var preorder = function (root) {
    let vals = []
    function dfs_pre_order(n) {
        if (!n) return;
        vals.push(n.val);
        for (let child of n.children) {
            dfs_pre_order(child);
        }
    }

    dfs_pre_order(root);

    return vals
};