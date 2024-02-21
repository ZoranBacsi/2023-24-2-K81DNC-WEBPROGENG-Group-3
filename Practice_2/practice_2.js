// 1. Task
const greetingButton = document.querySelector('button#greeting')
const greetingSpan = document.querySelector('#hello')

function handleGreetingButtonClick() {
    greetingButton.style.display = "none"
    greetingSpan.innerHTML = "Welcome on my Course!"
}

greetingButton.addEventListener('click',handleGreetingButtonClick)

// 2. Task
const target = Math.floor(Math.random()*100)
console.log(target)

const guessInput = document.querySelector('input#guess')
const guessButton = document.querySelector('button#guess')
const guessSpan = document.querySelector('span#guess')

function handleGuessButtonClick() {
    let guess = parseInt(guessInput.value)

    if(guess === target) guessSpan.innerHTML = "You find it out!"
    else if(guess > target) guessSpan.innerHTML = "Lower!"
    else guessSpan.innerHTML = "Greater!"
}

guessButton.addEventListener('click',handleGuessButtonClick)

// 3.Task

const urlInput    = document.querySelector("#url")
const showButton  = document.querySelector("#showimage")
const imageOutput = document.querySelector("img")

function handleShowButtonClick(){
    imageOutput.src = urlInput.value
}

showButton.addEventListener("click", handleShowButtonClick)

// 4.Task

const links = document.querySelectorAll('a[href]')
const ul = document.querySelector('ul')

links.forEach(function(link) {
    let li = document.createElement('li')
    li.innerHTML = link.href
    ul.appendChild(li)
})

// 5. TASK
const balanceSpan    = document.querySelector("#balance")
const moneyInput     = document.querySelector("#money")
const withdrawButton = document.querySelector("#withdraw")
let balance = parseInt(balanceSpan.innerText)

function handleMoneyInput(){
    let amount = parseInt(moneyInput.value)
    moneyInput.classList.toggle("error", isNaN(amount) || amount > balance)
}

function handleWithdrawClick(){
    let amount = parseInt(moneyInput.value)
    if (!isNaN(amount)) balance -= amount
    balanceSpan.innerText = balance
}

moneyInput.addEventListener("input", handleMoneyInput)
withdrawButton.addEventListener("click", handleWithdrawClick)