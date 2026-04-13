var reverseWords = function (s) {
    let res=[]
    let sentence = s.split(" ")
    let rever = sentence.map(sentence => {
        return sentence.split('').reverse().join('');
    });
    return rever.join(' ');
};