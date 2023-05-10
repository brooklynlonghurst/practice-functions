// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

function palindrome(word) {
    let k = word.length - 1
    for(let i = 0; i < word.length - 1/ 2; i++){
        if(word[i] !== word[k]) {
            return false
        } else {
            return true
        }
    }
}

console.log(palindrome('tacocat'))