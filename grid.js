import { onSnake } from "./snake.js"

export function randomGridPostion(){
    return {
        x: Math.floor(Math.random()*21) +1,
        y:Math.floor(Math.random()*21 )+1
    }
}

export function outSideGrid(position){
    return(
    position.x<1 || position.x > 21 
    || position.y<1 ||position.y >21
    )
}