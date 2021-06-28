let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift() // --> removes and returns the 1st element
largeCountries.unshift("China") // --> adds an element to the 1st place

largeCountries.pop()
largeCountries.push("Pakistan")

console.log(largeCountries)