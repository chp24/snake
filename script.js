
const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d')

ctx.clearRect(0, 0, canvas.width, canvas.height)

//head of snake object
let snake = { x: 200, y: 200, color: "white" }

//need a list  of coordinates to draw all of our pieces 
let snakeParts = [ { x: snake.x, y: snake.y } ]

//apple object
let apple = { x: 200, y: 100, color: "red" }

//var to keep track of last pressed key
lastKeyPressed = ''
//var for shorter lines of code involving tail
let tail = snakeParts.length - 1

//var for saving the tail to push new parts
let tempTail = null

ctx.fillStyle = snake.color //set color for player snake
ctx.fillRect(snakeParts[0].x, snakeParts[0].y, 20, 20) //draw the square for player snake

ctx.fillStyle = apple.color //set the fill color for apple dot
ctx.fillRect(apple.x, apple.y, 20, 20) //draw the square for apple

function resetGame(){

    //clear canvas for redraw
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    //reset player location
    snakeParts[0].x = 200
    snakeParts[0].y = 200
    //reset list
    snakeParts = [ { x: snake.x, y: snake.y } ]

    //reset tail
    tail = snakeParts.length - 1

    //reset temp tail
    tempTail = null

    //reset apple
    apple.x = 200
    apple.y = 100
    //reset last key pressed
    lastKeyPressed = ''
}
function tickGame(){
    
    //clear canvas for redraw
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    

    //out of bounds checking
    if( snakeParts[0].x < 0 || snakeParts[0].x > 400 || snakeParts[0].y < 0 || snakeParts[0].y > 400){
        resetGame()
    }
    
    //body collision checking
    for (let i = tail; i > 0; i--) {
        if(snakeParts[0].x == snakeParts[i].x && snakeParts[0].y == snakeParts[i].y){
            resetGame()
        }
    }
    //apple detection
    if (snakeParts[0].x == apple.x && snakeParts[0].y == apple.y) {
        
        //save current tail location 
        //so we can update all other places before placing new tail
        tempTail = {x: snakeParts[tail].x, y: snakeParts[tail].y} 
        
        //randomize new location for apple
        apple.x = Math.floor(Math.random() * (canvas.width - 20))
        apple.y = Math.floor(Math.random() * (canvas.height - 20))
        //snap to nearest 20 for valid placement
        apple.x = Math.floor(apple.x / 20) * 20
        apple.y = Math.floor(apple.y / 20) * 20
    }
    //now we have the location for the new apple and the new tail
    //now loop through tail list, update and draw all updated positions
    for (let i = tail; i > 0; i--) {
        snakeParts[i].x = snakeParts [i-1].x
        snakeParts[i].y = snakeParts [i-1].y

        ctx.fillStyle = snake.color //set color for this part of the body
        ctx.fillRect(snakeParts[i].x, snakeParts[i].y, 20, 20) //draw the square for player snake
    } 


    //now that the object exists we can check before we push
    if(tempTail){
        
        snakeParts.push( {x: tempTail.x, y: tempTail.y} );
        ctx.fillStyle = snake.color //set color for this part of the body
        ctx.fillRect(snakeParts[tail].x, snakeParts[tail].y, 20, 20) //draw the square for new snake tail
        
        //set back to null so this doesn't happen every tick
        tempTail = null

        //update tail
        tail = snakeParts.length - 1
    }
    
    //move head according to last direction pressed
    if(lastKeyPressed == 'w'){
        snakeParts[0].y -= 20
    }else if(lastKeyPressed == 's'){
        snakeParts[0].y += 20
    }else if(lastKeyPressed == 'a'){
        snakeParts[0].x -= 20
    }else if(lastKeyPressed == 'd'){
        snakeParts[0].x += 20
    }else{//snake starts out moving up
        snakeParts[0].y -= 20
    }
    
    ctx.fillStyle = snake.color //set color for this part of the body
    ctx.fillRect(snakeParts[0].x, snakeParts[0].y, 20, 20) //draw the square for player snake

    ctx.fillStyle = apple.color //set the fill color for apple dot
    ctx.fillRect(apple.x, apple.y, 20, 20) //draw the square for apple
    
}

setInterval(tickGame, 250)
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
})
