console.log("snake test");

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = 'white'       // set the fill color
x = 200
y = 200
ctx.fillRect(x, y, 15, 15)   // draw the square
timer = 25

// while( timer > 0 ){
//     y -= 10
//     timer -= 1

//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.fillRect (x,y,15,15)

// }

document.addEventListener('keydown', function(event) {
    // event.key contains the key pressed
    
    if (event.key == 'w'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        y -= 10
        ctx.fillRect (x,y,15,15)
    }
});
