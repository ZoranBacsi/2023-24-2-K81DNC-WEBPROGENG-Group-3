const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let spiderturtleImage = new Image();
spiderturtleImage.src = "spiderTurtleImage.png";

let spiderturtle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    epsilon: 0
}

function move(ds) {
    ctx.beginPath()
    ctx.moveTo(spiderturtle.x, spiderturtle.y)
    spiderturtle.x += Math.sin(spiderturtle.epsilon * Math.PI / 180) * ds
    spiderturtle.y -= Math.cos(spiderturtle.epsilon * Math.PI / 180) * ds
    ctx.lineTo(spiderturtle.x,spiderturtle.y)
    ctx.stroke()
    ctx.drawImage(spiderturtleImage,spiderturtle.x-25,spiderturtle.y-25)
}

function turn(de) {
    spiderturtle.epsilon += de
}

function polygon(numOfAngles, sideLength) {
    for (let i = 1; i <= numOfAngles; i++) {
        move(sideLength)
        turn(360/numOfAngles)
    }
}

ctx.lineWidth = 2;
polygon(8,70)
