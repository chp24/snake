console.log("snake test");

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = 'white'       // set the fill color
x = 200
y = 200
ctx.fillRect(x, y, 15, 15)   // draw the square

lastKeyPressed = ''
function moveDot(){
    console.log('entered movedot')
    if(lastKeyPressed == 'w'){
        y-= 10
    }
    else if(lastKeyPressed == 's'){
        y+= 10
    }
    else if(lastKeyPressed == 'a'){
        x-= 10
    }
    else if(lastKeyPressed == 'd'){
        x+= 10
    }
    else {
        y-= 10
    }
    

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect (x,y,15,15)
};

setInterval(moveDot, 125)

document.addEventListener('keydown', function(event) {
    // event.key contains the key pressed
    
    if (event.key == 'w' && lastKeyPressed != 'w' && lastKeyPressed != 's'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (x,y,15,15)
        lastKeyPressed = 'w'
    }

    if (event.key == 's' && lastKeyPressed != 's' && lastKeyPressed != 'w'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (x,y,15,15)
        lastKeyPressed = 's'
    }

    if (event.key == 'a' && lastKeyPressed != 'a' && lastKeyPressed != 'd'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (x,y,15,15)
        lastKeyPressed = 'a'

    }

    if (event.key == 'd' && lastKeyPressed != 'd' && lastKeyPressed != 'a'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (x,y,15,15)
        lastKeyPressed = 'd'

    }
});
