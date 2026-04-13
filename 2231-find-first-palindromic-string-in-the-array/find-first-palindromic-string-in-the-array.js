var firstPalindrome = function(words) {
  for (let w of words) {
        let wrev = w.split("").reverse().join("")
        if (w === wrev) {
            return w
        }
    }
    return ''   
};