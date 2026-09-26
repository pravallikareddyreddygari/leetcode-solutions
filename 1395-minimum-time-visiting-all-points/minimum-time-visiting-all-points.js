var minTimeToVisitAllPoints = function (points) {
    let totalMaxDist = 0;

    for (let i = 1; i < points.length; i++) {
        let [x1, y1] = points[i - 1];
        let [x2, y2] = points[i];

        let dx = Math.abs(x1 - x2);
        let dy = Math.abs(y1 - y2);

        totalMaxDist += Math.max(dx, dy);
    }

    return totalMaxDist;
};