var getMinDistance = function (a, target, start) {
    let minAbs = Infinity

    a.forEach((e, i) => {
        if (e === target) {
            if (Math.abs(i - start) < minAbs) {
                minAbs = Math.abs(i - start)
            }
        }
    });

    return minAbs
}