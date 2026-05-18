var checkStraightLine = function (points) {
    const getSlope = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);
    let prevPoint;
    let prevSlope;
    
    for (let point of points) {
        if (prevPoint !== undefined) {
            let slope = getSlope(prevPoint, point)
            if (slope === -Infinity) slope = Infinity
            if (prevSlope !== undefined) {
                if (slope !== prevSlope) return false
            }
            prevSlope = slope
        }
        prevPoint = point
    }

    return true;
};