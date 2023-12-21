import {gameBord} from "./game.js"
import {getInputDirection} from "./input.js"


export let snakeSpeed = 2
let newSegment = 0

const snakeBody = [{x:10 , y:10}]

export function update(){
    addSegment()
    let inputDirection = getInputDirection()

    for(let i = snakeBody.length-2 ;i>=0; i-- ){
        snakeBody[i+1]= { ...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function draw(gameBord){
    snakeBody.forEach(element => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridColumnStart = element.x
        snakeElement.style.gridRowStart = element.y
        snakeElement.classList.add("snake")
        gameBord.appendChild(snakeElement)
        
    });

console.log("d snake")

}

export function onSnake(position,{ignoredHead=false}={}) {
    return snakeBody.some(function (segment,index) {
        if(ignoredHead && index ===0) return false
        return equalPositins(segment,position)

    })
}
export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoredHead:true})

}
export function getSnakeHead(){
    return snakeBody[0]
}

 function equalPositins (pos1,pos2){
    
        return pos1.x === pos2.x && pos1.y === pos2.y
    
}

 export function expandSnake(amount){
    return newSegment += amount
}

 function addSegment(){
    for(let i=0;i<newSegment;i++){
        snakeBody.push({ ...snakeBody[snakeBody.length-1]})
    }
    newSegment = 0
 }