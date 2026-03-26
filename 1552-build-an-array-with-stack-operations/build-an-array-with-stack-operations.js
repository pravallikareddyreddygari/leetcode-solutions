var buildArray = function (target, n) {
    const result = []
    let targetIndex = 0
    for (let i = 1; i <= n; i++) {
        if (targetIndex === target.length) break
        if (target[targetIndex] === i) {
            result.push("Push")
            targetIndex++
        } else {
            result.push("Push")
            result.push("Pop")
        }
    }
    return result
}