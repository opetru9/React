import Flake from "./Flake/Flake";
import { useState, useEffect } from "react";

function Snow({ quantity }) {
  // flake falling using "useState()"
  let [top, setTop] = useState(0);

  useEffect(() => {
    setTimeout(() => {

      if (top < 90) {
        setTop(top + 10);
      } else {
        flakes.pop();

        /* then top > 90 ,cancel the Flake from array => !!! don't work !!!  
                the issue is that directly modifying flakes using flakes.pop()
                    in the else block won't update the component to reflect this change.
            This happens because React doesn't know about this direct modification of the flakes array.
            The component will no longer update after top > 90 and won't perform any changes. 
            - To tell React about changes, we need to use set */
      }

    }, 500);
  });

  let flakes = [<Flake top={top} size={50} color={"#fff"} />];

  return flakes;
}

