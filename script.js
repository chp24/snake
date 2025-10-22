console.log("snake test");

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = 'white'       // set the fill color
head_x = 200
player_y = 200
ctx.fillRect(head_x, player_y, 15, 15)   // draw the square

lastKeyPressed = ''
function moveDot(){
    console.log('head_x: ', head_x)
    console.log('player_y: ', player_y)

    //out of bounds checking
    if( head_x < 0 || head_x > 400 || player_y < 0 || player_y > 400){
        //reset player location
        head_x = 200
        player_y = 200
    }
    //move in last direction pressed
    else if(lastKeyPressed == 'w'){
        player_y-= 20
    }
    else if(lastKeyPressed == 's'){
        player_y+= 20
    }
    else if(lastKeyPressed == 'a'){
        head_x-= 20
    }
    else if(lastKeyPressed == 'd'){
        head_x+= 20
    }
    else {
        player_y-= 20
    }
    

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect (head_x,player_y,15,15)
};

setInterval(moveDot, 180)

document.addEventListener('keydown', function(event) {
    // event.key contains the keypressed
    
    //logic for valid keypresses, basically just dont let player move backwards
    if (event.key == 'w' && lastKeyPressed != 's'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (head_x,player_y,15,15)
        lastKeyPressed = 'w'
    }

    if (event.key == 's' && lastKeyPressed != 'w'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (head_x,player_y,15,15)
        lastKeyPressed = 's'
    }

    if (event.key == 'a' && lastKeyPressed != 'd'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (head_x,player_y,15,15)
        lastKeyPressed = 'a'
    }

    if (event.key == 'd' && lastKeyPressed != 'a'){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect (head_x,player_y,15,15)
        lastKeyPressed = 'd'
    }
});
