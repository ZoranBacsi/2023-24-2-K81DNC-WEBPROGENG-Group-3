const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// triangle
ctx.fillStyle = "blue"
ctx.strokeStyle = "orange"
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(20,200)
ctx.lineTo(20,20)
ctx.lineTo(200,200)
ctx.closePath()
ctx.stroke()
ctx.fill()

// Rectangle
ctx.fillStyle = "red"
ctx.strokeStyle = "green"
ctx.lineWidth = 20
ctx.fillRect(60,60,140,200)
ctx.strokeRect(60,60,140,200)


// Purple Circle
ctx.beginPath()
ctx.fillStyle = "purple"
ctx.strokeStyle = "black"
ctx.lineWidth = 2
ctx.arc(200,200,50,0,Math.PI/2)
ctx.stroke()
ctx.fill()

// Text
ctx.fillStyle = "white"
ctx.strokeStyle = "pink"
ctx.font = "50px consolas"
ctx.fillText("Ezekiel!", 80, 80)
ctx.strokeText("Ezekiel!", 80, 80)
