let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getAHand() {
    let randomIndex = Math.floor(Math.random() * hands.length)
    console.log(hands[randomIndex])
}


getAHand()