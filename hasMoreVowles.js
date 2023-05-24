// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

function hasMoreVowels(word) {
    let vowelCount = 0
    let consonantCount = 0

    for(let i = 0; i < word.length; i++) {
        if(word[i].includes('a') || word[i].includes('e') || word[i].includes('i') || word[i].includes('o') || word[i].includes('u')){
            vowelCount++
        } else {
            consonantCount++
        }
    } 
    return vowelCount > consonantCount
}

console.log(hasMoreVowels('moose'))

console.log(hasMoreVowels('aardvark'))