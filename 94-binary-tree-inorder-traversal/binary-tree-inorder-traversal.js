var inorderTraversal = function(root) {
    let vals = []

    function dfs_in_order(n) {
        if (!n) return;

        dfs_in_order(n.left);
        vals.push(n.val);
        dfs_in_order(n.right);
    }

    dfs_in_order(root);

    return vals
};