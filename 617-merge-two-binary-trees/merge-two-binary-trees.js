const cl = console.log
var mergeTrees = function (root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    root1.val += root2.val;
    cl(root1)

    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    cl(root1)

    return root1;
};