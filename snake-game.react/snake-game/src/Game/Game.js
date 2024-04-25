import Snake from "../snake/Snake";
import Apple from "../Apple/Apple";
import { useEffect, useReducer} from 'react'

// scheme of useReducer usage
// const [state, dispatch] = useReducer(reducer, initialArg)

function reduceGameState(state, action ){

  /* take the direction into the dispatch(action) */
  
  // 1. find the snake index:
  let snakeIdx = state.children.findIndex((child) => (child.name = "snake"));
  
  if(action.direction){
    state.children[snakeIdx].children[0].dir  = action.direction 
  }

  // 2. find the snake and update the values:
  state.children[snakeIdx].children = state.children
    .find((child) => child.name === "snake")
    .children.reverse() /*[ tail, body, head] */
    .map((child, idx, array) => {
      if (child.dir) {
        if (child.name !== "snake__head") {
          /* if is not a head , take the dir and coord of your next sibling   */
          child.dir = array[idx + 1].dir;
          child.coord ={...array[idx + 1].coord};
        } else {
          if (child.dir === "up") {
            /* if is the head , change your coord in base of dir */
            child.coord.top -= 32;
          } else if (child.dir === "down") {
            child.coord.top += 32;
          } else if (child.dir === "left") {
            child.coord.left -= 32;
          } else if (child.dir === "right") {
            child.coord.left += 32;
          }
        }
      }
      return child;
    })
    .reverse() /*[ head, body, tail ] */;

  // 3.clone the modified object
  let newState = structuredClone(state);
  
  // 3.return new data:
  return newState;
}

// prevent multiple events and timers:
let oldHandlerKeydown = null;
let oldTimer = null

const Game = ({ data }) => {

  let [state, dispatch] = useReducer( reduceGameState, data)

  function handleKeydown( event ){
    switch ( event.key){
      case 'ArrowRight': 
        dispatch({direction: 'right'})
      break
      case 'ArrowLeft': 
        dispatch({direction: 'left'})
      break
      case 'ArrowUp': 
        dispatch({direction: 'up'})
      break
      case 'ArrowDown': 
        dispatch({direction: 'down'})
      break
      default:;
    }
  }

  useEffect(()=>{

    if(oldTimer !== null) {
      clearTimeout(oldTimer)
    }

    oldTimer = setTimeout(()=>{
      dispatch({})/* ['up','down','left','right'] */
    },1000)
 
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
                  default:
                    return null;
                }
                                
            })}
        </div>
     );
}
 
export default Game;