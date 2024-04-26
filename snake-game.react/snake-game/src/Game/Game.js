import Snake from "../snake/Snake";
import Apple from "../Apple/Apple";
import Rock from "../Rock/Rock";
import { useEffect, useReducer} from 'react'
import { generateRandomCoord, renderScore, gameOver } from "../helpers";
const { maxWidth, maxHeight } = generateRandomCoord();
let score = 0;   
renderScore(score)

// scheme of useReducer usage
// const [state, dispatch] = useReducer(reducer, initialArg)

function reduceGameState(state, action ){

  /* take the direction into the selectedDir */
  
  // 1. find the snake index:
  let snakeIdx = state.children.findIndex((child) => (child.name = "snake"));
  
  if(action.direction){
    state.children[snakeIdx].children[0].dir  = action.direction 
  }
  
  let headElement = null

  // 2. find the snake and update the values:
  state.children[snakeIdx].children = state.children
    .find((child) => child.name === "snake")
    .children.reverse() /*[ tail, body, head] */
    .map((child, idx, array) => {
      
      if (child.dir) {
        if (child.name === "snake__head") {
          
        } else if (child.name === "snake__body") {

          if (array[idx + 1].name === "snake__head") {

             headElement = array[idx + 1];

            if (array[idx + 1].dir === "up" && array[idx - 1].dir === "right") {
              child.dir = "right-up";

            }else if(array[idx + 1].dir === "down" && array[idx - 1].dir === "right") {
              child.dir = "right-down";  

            }else if(array[idx + 1].dir === "up" && array[idx - 1].dir === "left") {
              child.dir = "left-up";  

            }else if(array[idx + 1].dir === "down" && array[idx - 1].dir === "left") {
              child.dir = "left-down";  

            }else if(array[idx + 1].dir === "right" && array[idx - 1].dir === "up") {
              child.dir = "up-right";  

            }else if(array[idx + 1].dir === "left" && array[idx - 1].dir === "up") {
              child.dir = "up-left";  

            }else if(array[idx + 1].dir === "right" && array[idx - 1].dir === "down") {
              child.dir = "down-right";  

            }else if(array[idx + 1].dir === "left" && array[idx - 1].dir === "down") {
              child.dir = "down-left";  

            } else {
              child.dir = array[idx + 1].dir;
            }

        } else {
          child.dir = array[idx + 1].dir;
        }

      } else if (child.name === "snake__tail") {  

        if(array[idx + 1] && array[idx + 1].dir !== undefined){

          if(array[idx + 1].dir.includes('-')){
            child.dir = array[idx + 1].dir
                        .replace(child.dir, '')
                        .replace('-', '')
          }else{
            child.dir = array[idx + 1].dir;
          }      
        }
      }
    }
      return child;
    })
    .map((child, idx, array) => {
        if (child.name === "snake__head") {
            if (child.dir === "up") {
              if(child.coord.top < 16){
                child.coord.top = maxHeight + 32
              }else{
                child.coord.top -= 32;
              }
            } else if (child.dir === "down") {
              if (child.coord.top > maxHeight) {
                child.coord.top = 0;
              } else {
                child.coord.top += 32;
              }
            } else if (child.dir === "left") {
              if (child.coord.left < 16) {
                child.coord.left = maxWidth + 32;
              } else {
                child.coord.left -= 32;
              }
            } else if (child.dir === "right") {
              if (child.coord.left > maxWidth) {
                child.coord.left = 0;
              } else {
                child.coord.left += 32;
              }
            }
        } else {
            if(array[idx + 1]){
              child.coord = {...array[idx + 1].coord}
            }
        }
       
    return child;
  })
    .reverse() /*[ head, body, tail ] */;

// 2.b compute the collision with rock:
let rockElements = state.children.filter(child => child.name === 'rock')

  let collision = rockElements.find(rock => {
  if(headElement.coord.top === rock.coord.top &&
  headElement.coord.left === rock.coord.left ){
    return rock
  }else{
    return null
  }
})
if (collision){
  gameOver()
}

// 2.b Snake eat:
  state.children = state.children.filter( item =>{

    let result = item.name === "snake" ||
      !(
        headElement.coord.top  - 10 <= item.coord.top &&
        headElement.coord.top  + 10 >= item.coord.top &&
        headElement.coord.left - 10 <= item.coord.left &&
        headElement.coord.left + 10 >= item.coord.left
      )

    if(!result){
// Score rendering:
      score += 10;
      renderScore(score);
//

      let newHeadCoordTop = null;
      let newHeadCoordLeft = null;
      if (headElement.dir === "up") {
        newHeadCoordTop = headElement.coord.top - 32;
        newHeadCoordLeft = headElement.coord.left;
      } else if (headElement.dir === "down") {
        newHeadCoordTop = headElement.coord.top + 32;
        newHeadCoordLeft = headElement.coord.left;
      } else if (headElement.dir === "right") {
        newHeadCoordTop = headElement.coord.top;
        newHeadCoordLeft = headElement.coord.left + 32;
      } else if (headElement.dir === "left") {
        newHeadCoordTop = headElement.coord.top;
        newHeadCoordLeft = headElement.coord.left - 32;
      }

      let newHead = {
        name: "snake__head",
        dir: headElement.dir,
        coord: { top: newHeadCoordTop, left: newHeadCoordLeft },
      };

      let newBody = {
        name: "snake__body",
        dir: headElement.dir,
        coord: headElement.coord,
      };

      state.children[0].children.splice(0, 0, newHead);
      state.children[0].children.splice(1, 1, newBody);

      if (timerDelay > 0) {
        timerDelay -= 50;
      }
    }
    return result
  })
  // 3.clone the modified object
  let newState = structuredClone(state);
  
  // 4.return new data:
  return newState;
}

let timerDelay = 500
// prevent multiple events and timers:
let oldHandlerKeydown = null;
let oldTimer = null
let selectedDir = null

const Game = ({ data }) => {

  let [state, dispatch] = useReducer( reduceGameState, data)

  function handleKeydown( event ){
    switch ( event.key){
      case 'ArrowRight': 
        selectedDir = 'right'
      break
      case 'ArrowLeft': 
        selectedDir = 'left'
      break
      case 'ArrowUp': 
        selectedDir = 'up'
      break
      case 'ArrowDown': 
        selectedDir = 'down'
      break
      default:;
    }
  }

  useEffect(()=>{

    if(oldTimer !== null) {
      clearTimeout(oldTimer)
    }

    oldTimer = setTimeout(()=>{
      dispatch({direction : selectedDir})
      selectedDir = null
    },timerDelay)
 
// remove "old" and add "new" event any effect:
    if (oldHandlerKeydown !== null) {
      document.body.removeEventListener("keydown", oldHandlerKeydown);
    }
    document.body.addEventListener("keydown", handleKeydown);
    oldHandlerKeydown = handleKeydown
    
  })
  
    return ( 
        <div className="game">
            {state.children.map((childData, idx)=>{

                switch (childData.name) {
                  case "snake":
                    return <Snake key={`k-${idx}`} data={childData} />;
                  case "apple":
                    return <Apple key={`k-${idx}`} {...childData}/>;
                  case "rock":
                    return <Rock key={`k-${idx}`} {...childData}/>;
                  default:
                    return null;
                }
                                
            })}
        </div>
     );
}
 
export default Game;