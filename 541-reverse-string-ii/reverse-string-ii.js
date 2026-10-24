var reverseStr = function(s, k) {
    let arr = s.split('')
    for(let start = 0; start < arr.length; start += 2 * k) {
    let i = start
    let j = Math.min(start + k - 1, arr.length - 1)
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
return arr.join("")
};