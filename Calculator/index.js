let ke = document.querySelectorAll(".ke")
let screen = document.querySelector(".screen")
let answer = document.querySelector(".answer")
let exparr = []

for (let i of ke) {
    i.addEventListener("click", (e) => {
        let expression = e.target.innerText
        if (exparr.length === 0 && ["+", "-", "*", "/", "%"].includes(expression)) {
            return;
        }
        else {
            exparr.push(expression)
            screen.innerText = exparr.join("")
        }
    })
}

let clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    screen.innerText = ""
    exparr = []
    answer.innerText = ""
    console.log(exparr.length)
})

let Delete = document.querySelector(".Delete")
Delete.addEventListener("click", () => {
    exparr.pop()
    screen.innerText = exparr.join("")
})

let equal = document.querySelector(".equal")
equal.addEventListener("click", () => {
    if (exparr.length !== 0) {
        let result = eval(exparr.join(""));
        answer.innerText = result;
    }
    else {
        alert("Enter Something to calculate")
    }
})
let multiply = document.querySelector(".multiply")
multiply.addEventListener("click", () => {
    if (exparr.length !== 0) {
        exparr.push("*")
        screen.innerText = exparr.join("")
    }

})

let hasdecimal = false

let point = document.querySelector(".point")
point.addEventListener("click", (e) => {
    let expression = e.target.innerText
    if (!hasdecimal) {
        exparr.push(expression)
        screen.innerText = exparr.join("")
        hasdecimal = true

    }

})

let operation = document.querySelectorAll(".operation")
console.log(operation)

for (let i of operation) {
    i.addEventListener("click", () => {
        hasdecimal = false
    })


}
