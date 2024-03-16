const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const scoreDiv = document.querySelector("#score")
const startButton = document.querySelector("button")
const startDiv = document.querySelector("#start")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const CLOUD_DIST = 400
let CLOUD_SPEED = -200

let clouds = []
let plane = {
    x: Number.MIN_SAFE_INTEGER,
    y: canvas.height / 2 - 63,
    width: 200,
    height: 125,
    vy: 0,
    ay: 200
}

let planeImg = new Image()
planeImg.src = "assets/plane.png"

let cloudImg = new Image()
cloudImg.src = "assets/cloud.png"

let lastFrame = performance.now()
let dead = true
let passed = 0

function gameLoop() {
    let now = performance.now()
    let dt = (now - lastFrame) / 1000
    lastFrame = now
    if (!dead) update(dt)
    render()
    requestAnimationFrame(gameLoop)
}

function update(dt) {
    
}

function isCollide(cloud) {

    return false;
} 

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function newCloud() {
    let y = random(63, canvas.height - 63)

    clouds.push(
        {
            x: canvas.width,
            y: y,
            width: 200,
            height: 125
        }
    )
}

function render() {

}

function handleFlying(e) {
    if (!dead && ((e.type == "keydown" && e.code == "Space") || (e.type == "touchstart"))) {
        e.preventDefault()
        plane.vy = -200
    }
}

function handleStart(e) {
    e.preventDefault()
    if (dead) {
        plane.x = 0
        plane.y = canvas.height / 2 - 63
        plane.vy = 0
        clouds = []
        newCloud()
        dead = false
        passed = 0
        scoreDiv.innerText = passed
        startDiv.style.display = "none"
    }
}

document.addEventListener("keydown", handleFlying)
document.addEventListener("touchstart", handleFlying)
startButton.addEventListener("click", handleStart)

gameLoop()