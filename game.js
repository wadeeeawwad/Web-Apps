import { snakeSpeed , update as updateSnake , draw as drawSnake ,
    snakeIntersection,getSnakeHead } from "./snake.js"
import { update as updateFood , draw as drawFood   } from "./food.js"
import {outSideGrid} from "./grid.js"


let lastRenderTime = 0
let gameover = false ;
export const gameBord = document.getElementById("game-bord")

export function main(currentTime){
    if(gameover){
        if(confirm("you lost , press ok to restart")){
            window.location="/"
        }
    }


    window.requestAnimationFrame(main)

    const secondsFromLastRenderTime = (currentTime-lastRenderTime)/1000
    if(secondsFromLastRenderTime < 1/snakeSpeed) return


    lastRenderTime = currentTime
    console.log("render")

    update()

    draw()
}


function update(){
    updateSnake()
    updateFood()
    checkDeth()

}

function draw(){
    gameBord.innerHTML = ""


    drawSnake(gameBord)
    drawFood(gameBord)


}
window.requestAnimationFrame(main)

function checkDeth(){
    gameover = outSideGrid(getSnakeHead()) || snakeIntersection()
}