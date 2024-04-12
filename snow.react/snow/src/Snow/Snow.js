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
        top={0}
        size={50}
        left={randInt(0, 99)}
        color={randColor()}
      />
    );
  }

  let [flakes, setFlakes] = useState(flakesArray);
  const topLimit = 90;

//  using "useState" make the flakes drop and melt
  useEffect(() => {
    setTimeout(() => {
      setFlakes(

        flakes
          .filter(( { props: {top} } ) => top < topLimit ) /*HW1 */ /* melt flakes*/
          .map(( { props : { top, left, size, color} } , index) => ( /* HW3 */
            <Flake
              key   = {index}
              top   = {top + 5} /* drop flakes*/
              left  = {left }
              size  = {size}
              color = {color}
            />
          ))

      );
    }, 500);
  });

  return flakes;
}

export default Snow;

