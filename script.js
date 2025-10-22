console.log("snake test");

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

//snake object
let head = { x: 200, y: 200, color: "white" };

//apple object
let apple = { x: 100, y: 100, color: "red" };

//var to keep track of last pressed key
lastKeyPressed = ''

ctx.fillStyle = head.color //set color for player head
ctx.fillRect(head.x, head.y, 15, 15) //draw the square for player head

ctx.fillStyle = apple.color //set the fill color for apple dot
ctx.fillRect(apple.x, apple.y, 15, 15) //draw the square for apple

function tickGame(){
    console.log('head.x: ', head.x)
    console.log('head.y: ', head.y)

    //out of bounds checking
    if( head.x < 0 || head.x > 400 || head.y < 0 || head.y > 400){
        //reset player location
        head.x = 200
        head.y = 200
    }
    //move in last direction pressed
    else if(lastKeyPressed == 'w'){
        head.y-= 20
    }
    else if(lastKeyPressed == 's'){
        head.y+= 20
    }
    else if(lastKeyPressed == 'a'){
        head.x-= 20
    }
    else if(lastKeyPressed == 'd'){
        head.x+= 20
    }
    else {
        head.y-= 20

        //create first apple dot
    }
    

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = head.color //set color for player head
    ctx.fillRect(head.x, head.y, 15, 15) //draw the square for player head

    ctx.fillStyle = apple.color //set the fill color for apple dot
    ctx.fillRect(apple.x, apple.y, 15, 15) //draw the square for apple
    
};

setInterval(tickGame, 180)
//listening to player input
document.addEventListener('keydown', function(event) {
    
    //logic for valid keypresses, basically just dont let player move backwards
    if (event.key == 'w' && lastKeyPressed != 's'){
        lastKeyPressed = 'w'
    }

    if (event.key == 's' && lastKeyPressed != 'w'){
        lastKeyPressed = 's'
    }

    if (event.key == 'a' && lastKeyPressed != 'd'){
        lastKeyPressed = 'a'
    }

    if (event.key == 'd' && lastKeyPressed != 'a'){
        lastKeyPressed = 'd'
    }
});
