var minBitFlips = function (start, goal) {
    let res = 0;
    while (start > 0 || goal > 0) {
        let startLastBit = start & 1;
        let goalLastBit = goal & 1;

        if (startLastBit !== goalLastBit) {
            res++;
        }

        start >>= 1;
        goal >>= 1;
    }
    return res;
};