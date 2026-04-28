var findMissingAndRepeatedValues = function (g) {
    const n = g.length;

    let repeatedValInGrid;
    const set = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const x = g[i][j];
            if (set.has(x)) {
                repeatedValInGrid = x;
            }
            set.add(x);
        }
    }

    let missingValInGrid;
    for (let x = 1; x <= n * n; x++) {
        if (!set.has(x)) {
            missingValInGrid = x;
            break;
        }
    }

    return [repeatedValInGrid, missingValInGrid];
};