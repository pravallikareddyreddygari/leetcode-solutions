var maxFreqSum = function (s) {
    let vmax = 0
    let cmax = 0

    let vFreq = {}
    let cFreq = {}
    for (let ch of s) {
        if ('aeiou'.includes(ch)) {
            if (ch in vFreq) {
                vFreq[ch]++
            } else {
                vFreq[ch] = 1
            }
            vmax = Math.max(vmax, vFreq[ch])
        } else {
            if (ch in cFreq) {
                cFreq[ch]++
            } else {
                cFreq[ch] = 1
            }
            cmax = Math.max(cmax, cFreq[ch])
        }
    }

    return vmax + cmax
};