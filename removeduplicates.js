var removeDuplicates = function(a) {

    for (let i = 0; i < a.length; i++) { // go next
        if (a[i] === a[i + 1]) {
            a.splice(i + 1, 1) // delete duplicate
            i-- 
        }  
    }
 return a.length
};