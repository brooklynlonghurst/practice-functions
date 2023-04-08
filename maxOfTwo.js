//Write a block of code that will print out the largest value.
// x = 8
// y = 8

// let biggestNum = Math.max(x, y)

// console.log(biggestNum)

function max(x, y){
    if(x > y){
        return x
    } else if(x < y){
        return y
    } else if(x === y){
         return 'These numbers are identcal.'
    }
}
console.log(max(4, 4))