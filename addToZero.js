// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            console.log('true')
        } else {
            console.log('false')
        }
    }
}

console.log(addToZero([1, 2, 4, -2]))