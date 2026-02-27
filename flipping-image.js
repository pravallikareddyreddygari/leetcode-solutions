var flipAndInvertImage = function (image) {
    let m = image.length // r
    let n = image[0].length // c

    for (let row of image) {
        row.reverse()
        for (let j = 0; j < n; j++) {
            row[j] = 1 - row[j];
        }
    }

    return image;
}