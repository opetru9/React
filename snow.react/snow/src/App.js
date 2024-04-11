import { useState } from 'react';
import Flake from './Flake/Flake';
import { randColor, randInt } from "./helpers/generators";




function App() {

  let [showChild, setShowChild] = useState(true)

  const flakeArguments = {
    size: randInt(20, 40),
    color: randColor({
      reddish: 0,
      greenish: 0,
      blueish: 1,
    }),
    top: 0,
    left: randInt(0, 100),
    whenDone: () => {
      setShowChild(false)
    },
  };

  return (
    <div >

      {/* if "showChild" == false => "flake" does't exist,
            -so we can cancel a component from the DOM in react */}
      { showChild && <Flake  {...flakeArguments}/>}  

    </div>
  );
}

export default App;
