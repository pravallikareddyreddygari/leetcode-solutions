var findIntersectionValues = function (nums1, nums2) {
    let c1 = 0
    for (let n1 of nums1) {
        if (nums2.includes(n1)) {
            c1++
        }
    }

    let c2 = 0
    for (let n2 of nums2) {
        if (nums1.includes(n2)) {
            c2++
        }
    }

    return [c1, c2]
};
