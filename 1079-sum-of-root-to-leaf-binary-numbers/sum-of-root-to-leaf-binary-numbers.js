// let cl = console.log
var sumRootToLeaf = function (root) {
    let s = 0

    function dfs(n, binstr) {
        if (!n) return

        let nbinstr = binstr + n.val

        if (!n.left && !n.right) {
            // leaf
            s += parseInt(nbinstr, 2)
            return
        }

        dfs(n.left, nbinstr);
        dfs(n.right, nbinstr);
    }

    dfs(root, '')

    return s
};