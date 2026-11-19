var minChanges = function (n, k) {
    let ct = 0

    for (let i = 31; i >= 0; i--) {
        let ithBitValueInN = (n & (1 << i)) ? 1 : 0
        let ithBitValueInK = (k & (1 << i)) ? 1 : 0

        if (ithBitValueInN !== ithBitValueInK) {
            // different bits
            if (!ithBitValueInN && ithBitValueInK) {
                //  0->1 - not possible - fail
                return -1
            } else {
                //  1->0 possible
                ct++
            }
        }
    }
    return ct
};