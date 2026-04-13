var countConsistentStrings = function (allowed, words) {
    let set = new Set(allowed)
    return words.filter(word=>{
        return word.split("").every(char=>set.has(char)) 
        }).length;
};