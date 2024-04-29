
function gameOver(){
  alert('Game Over')
  window.location.reload();
}
function renderScore(score){
  let scoreElement = document.querySelector('.score')
  scoreElement.innerText = `Score: ${score}`
}


function generateRandomCoord() {
  // Get the window dimensions
  const windowWidth = window.innerWidth - 64;
  const windowHeight = window.innerHeight - 64;

  // Calculate the largest integer multiple of 32 less than or equal to the window dimensions
  const maxWidth = Math.floor(windowWidth / 32) * 32;
  const maxHeight = Math.floor(windowHeight / 32) * 32;

  // Generate a random number between 0 and the calculated maximum value
  const randomWidth = Math.floor(Math.random() * (maxWidth +1));
  const randomHeight = Math.floor(Math.random() * (maxHeight +1));

  // Ensure the generated number is a multiple of 32
  const finalWidth = (Math.floor(randomWidth / 32) * 32) +32;
  const finalHeight = (Math.floor(randomHeight / 32) * 32 +32);

    // Return the generated final number
    return {
      width: finalWidth,
      height: finalHeight,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
    };
}
//  ------------------ Main Components with random coords array: ---------------------
let game = {
  score: 0,

  children: [
    {
      name: "snake",
      children: [
        { name: "snake__head", dir: "up", coord: { top: 192, left: 192 } },
        { name: "snake__body", dir: "up", coord: { top: 224, left: 192 } },
        { name: "snake__tail", dir: "up", coord: { top: 256, left: 192 } },
      ],
    },
    {
      name: "apple",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "apple",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "apple",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "apple",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "apple",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "rock",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "rock",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
    {
      name: "rock",
      coord: { top: generateRandomCoord().height, left: generateRandomCoord().width },
    },
  ],
};

function findExistentCoords(array){
    let noSnakeElements = array.children.filter( child => child.name !== 'snake')

    let coordsArray = []

    noSnakeElements.forEach( child =>
      coordsArray.push(child.coord) 
    )    
  
    return coordsArray
}



// ----------------- Create Components Helpers: ------------------------------
// common Components
const Component = ({ name, children }) => {
  return <div className={name}>{children}</div>;
};

// Decorators:
const withCoordinates = (Component) => {
  return ({ coord: { top, left }, ...props }) => {
    return (
      <div style={{ top: `${top}px`, left: `${left}px`, position: "absolute" }}>
        <Component {...props} />
      </div>
    );
  };
};

const withDirection = (Component) => {
  return ({ dir, ...props }) => {
    return (
      <div className={`dir-${dir}`}>
        <Component {...props} />
      </div>
    );
  };
};

export {
  Component,
  withCoordinates,
  withDirection,
  generateRandomCoord,
  game,
  gameOver,
  renderScore,
  findExistentCoords,
};
