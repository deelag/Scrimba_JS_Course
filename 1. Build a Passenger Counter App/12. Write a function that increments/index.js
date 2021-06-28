let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment() {
    ++lapsCompleted // prefix --> increments and returns the value after incrementing
}

increment()
increment()
increment()

console.log(lapsCompleted)

function decrement() {
    lapsCompleted-- // postfix --> decrements and returns the value before decrementing
}

decrement()

console.log(lapsCompleted)
