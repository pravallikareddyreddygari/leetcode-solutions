/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    let arr = this
    if (arr.length) {
        return arr.at(-1)
        // return arr[arr.length - 1]
    } else {
        return -1
    }
};
