var countNodes = function (root) {
    if (!root) return 0
    let leftHeight = 0
    let current = root
    while (current) {
        leftHeight++;
        current = current.left;
    }
    let rightHeight = 0;
    current = root;
    while (current) {
        rightHeight++;
        current = current.right;
    }
    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
}
