var splitWordsBySeparator = function (words, separator) {
    let res = []

    for (let word of words) {
        let segments = word.split(separator)

        for (let segment of segments) {
            if (segment !== "") {
                res.push(segment)
            }
        }
    }
    return res
};