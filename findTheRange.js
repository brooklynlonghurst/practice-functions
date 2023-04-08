//Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.
//you can use the spread operator to pass each element in the array an an agrument to Math.min() and Math.max(). so it's like looping through each element to find the smallest and largest

let numbers = [9, 5, 3, 2, 4, 1, 8, 11]

let smallest = Math.min(...numbers) 
let biggest = Math.max(...numbers)

console.log(smallest + ' and ' + biggest)