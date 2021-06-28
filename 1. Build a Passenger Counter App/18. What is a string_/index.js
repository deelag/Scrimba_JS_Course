let countEl = document.getElementById("count-el") // "count-el" is a string
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}


