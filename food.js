import { gameBord } from "./game.js"
import { onSnake , expandSnake } from "./snake.js"
import { randomGridPostion } from "./grid.js"
 let food = {x:1,y:1}
const expantionRate = 1

export function update(){
    if(onSnake(food)) {
        expandSnake(expantionRate)

        food = getRandomFoodPosition()
    }
    
}

export function draw(gameBord){
    
        const foodElement = document.createElement("div")
        foodElement.style.gridColumnStart = food.x
        foodElement.style.gridRowStart = food.y
        foodElement.classList.add("food")
        gameBord.appendChild(foodElement)

}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPostion() ;
    }
    return newFoodPosition
}