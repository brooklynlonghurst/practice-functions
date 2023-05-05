// Given a word, return true if that word contains only unique characters. Return false otherwise.

//1. loop over the word
//2. if there are no duplicate letters, than it is true. else false.

function hasUniqueChars(word) {
    for (let i = 0; i < word.length; i++){
      if(word.lastIndexOf(word[i]) !== i){
        return false
      }
    }
    return true
}

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Mooonday'))