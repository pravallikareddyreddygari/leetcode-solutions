var preorderTraversal = function (root) {
    let vals = [];

    function dfs_pre_order(n) {
        if (!n) return;

        vals.push(n.val);
        dfs_pre_order(n.left);
        dfs_pre_order(n.right);
    }

    dfs_pre_order(root);

    return vals;
};