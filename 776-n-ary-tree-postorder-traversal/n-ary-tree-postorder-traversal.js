var postorder = function (root) {
    let vals = []

    function dfs_post_order(n) {
        if (!n) return;

        for (let child of n.children) {
            dfs_post_order(child);
        }
        vals.push(n.val);
    }

    dfs_post_order(root);

    return vals
};