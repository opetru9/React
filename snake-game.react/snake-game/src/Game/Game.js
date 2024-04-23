import Snake from "../snake/Snake";
import Apple from "../Apple/Apple";
import {useState, useEffect} from 'react'

const Game = ({data, data: {children}}) => {

  let [gameData, setGameData] = useState(data)

  useEffect(()=>{
    setTimeout(()=>{
      // 1.clone the data object
      let newGameData = structuredClone(gameData);
      // 2.modify the clone
      newGameData.children[0].children[0].coord.top += 64
      // 3.set new modifyed object as the new state
      setGameData(newGameData)
    },100000)
  })
  
    return ( 
        <div className="game">
            {gameData.children.map((childData, idx)=>{

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