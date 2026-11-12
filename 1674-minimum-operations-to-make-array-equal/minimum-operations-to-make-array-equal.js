var minOperations = function(n) {
    let operations = 0

    for (let i = 0; i < Math.floor(n / 2); i++) {
        operations += (n - ((2 * i) + 1))
    }
    return operations
}