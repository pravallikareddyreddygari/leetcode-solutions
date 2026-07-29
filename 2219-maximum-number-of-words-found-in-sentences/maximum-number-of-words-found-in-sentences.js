var mostWordsFound = function(sentences) {
    let res = 0;
    for (let i=0;i<sentences.length;i++) {
        let  words= sentences[i].split(" ");
        res = Math.max(words.length,res);
    }
    
    return res;
};
   