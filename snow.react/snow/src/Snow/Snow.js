import { randInt, randColor } from "../helpers/generators";
import Flake from "./Flake/Flake";
import { useState, useEffect } from "react";

function Snow({ quantity }) {

// 1. create an array with "quantity" * elements /* HW2 */
  let flakesArray = [];
  for (let i = 0; i < quantity; i++) {
    flakesArray.push(
      <Flake
        key={i}
        top={randInt(-4, -25)}
        size={randInt(8, 20)}
        left={randInt(1, 99)}
        color={randColor({
          reddish: 0.1,
          greenish: 0.1,
          blueish: 1,
        })}
      />
    );
  }

  let [flakes, setFlakes] = useState(flakesArray);

  let flakesToReset = (quantity - flakes.length);
  const topLimit = randInt(92, 99);
  

//  using "useState" make the flakes drop and melt
  useEffect(() => {
    setTimeout(() => {
      setFlakes(

        [ ...flakes,
          ...new Array( flakesToReset ) /* new Array with a fixed number o elements     */
          .fill()                       /* fill to any element the undefined value      */
          .map( ( _, index ) =>         /* to any element assign a new Flake component  */

            <Flake
              key={index}
              top={randInt(-4, -10)}
              size={randInt(8, 25)}
              left={randInt(1, 99)}
              color={randColor({reddish: 0.1,greenish: 0.1,blueish: 1,})}/>)] /* into flakes Array we crate a new array with "flakesToReset" *
                      number of elements , so when one of the flake melt ,it appear on the top again */

          .filter(( { props: {top} } ) => top < topLimit ) /*HW1 */ /* melt flakes when top > 90*/
          .map(( { props : { top, left, size, color} } , index) => ( /* HW3 */
            <Flake
              key   = {index}
              top   = {top + (0.04 * size) } /* drop flakes*/
              left  = {left + 0.1}
              size  = {size}
              color = {color}
            />
          ))

      );
    }, 70);
  });

  return flakes;
}

export default Snow;

