var numberGame = function (a) {
    a.sort((a, b) => a - b)
    
    let res = []
    while (a.length > 0) {
        let alice = a.shift()
        let bob = a.shift()
        res.push(bob, alice)
    } 
    return res
};