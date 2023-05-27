//Goal: pass in a string that has numbers and letters. The numbers represent how many letters to skip over. 
//Logic: How am I going to loop over the string and tell the computer to skip the amount the number is set to? 


function decoder(code){
    
    let letters = '';
    //we'll need to loop through the string
    for(let i = 0; i < code.length; i++){
        if(/\D/.test(code[i])){
            letters += code[i];
        } else {
            i += +code[i]; //what's my logic to let the computer know to skip the amount of numbers listed? 
        }
       
    }
    return letters
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3jyhf0i2ikn0d'))
console.log(decoder('0He3abcl14lo2gh 3zxyw1ior5abcdeld'))