var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let res = [];
    for (let x of set1) {
        if (set2.has(x)) {
            res.push(x);
        }
    }
    return res;
};