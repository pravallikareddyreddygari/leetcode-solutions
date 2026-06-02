var merge = function (nums1, m, nums2, n) {
    let start = m
    for (let x of nums2) {
        nums1[start++] = x
    }
    nums1.sort((a, b) => a - b)
};