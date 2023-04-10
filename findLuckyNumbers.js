//Given a number, n, return an array containing n unique random numbers between 1-10, inclusive.

//i need to return an array 
//with Math.random() for a unique number


function luckyNumber(num){
    let listOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let answer = []
    for(let i = 0; i < num; i++){
        let x = Math.floor(Math.random() * listOfNum.length)
        answer.push(listOfNum[x])
        listOfNum.splice(x, 1)
    }
    return answer
}

console.log(luckyNumber(7))