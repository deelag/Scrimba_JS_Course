// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 2;
}

let firstCard = getRandomInt(9)
let secondCard = getRandomInt(9)
console.log(firstCard)
console.log(secondCard)

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard