const canFormTriangle = ([x1, y1], [x2, y2], [x3, y3]) => {
    const hasSameSlope = (y2 - y1) * (x3 - x2) === (y3 - y2) * (x2 - x1)
    
    return !hasSameSlope
}

var isBoomerang = function (points) {
    let [p1, p2, p3] = points
    return canFormTriangle(p1, p2, p3)
};