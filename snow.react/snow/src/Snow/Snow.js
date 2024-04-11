// import {randInt, randColor} from '../helpers/generators'
import Flake from './Flake/Flake'
import {useState, useEffect} from 'react'

function Snow( { quantity } ) {

  // flake falling using "useState()"
  let [top, setTop] = useState(0);
  let [flakes, setFlakes] = useState([<Flake key={ 1 } top={ top } size={50} color={'#fff'}/>])

  useEffect(() => {

    setTimeout(() => {

      if (top < 90) {
        setTop(top + 10);
        setFlakes([<Flake key={1} top={top} size={50} color={"#fff"} />]); /* update the Flake until top < 90 */
      } else {
        setFlakes([]); /* then top > 90 ,cancel the Flake from array*/
      }
      
    }, 500);
  });

  return flakes;
}

export default Snow;



//   const flakeArguments = {
//     size: randInt(20, 40),
//     color: randColor({
//       reddish: 0.1,
//       greenish: 0.1,
//       blueish: 1,
//     }),
//     top: 0,
//     left: randInt(0, 100),
//   };