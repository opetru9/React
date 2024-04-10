import Flake from './Flake/Flake';
import { randColor, randInt } from "./helpers/generators";


const flakeArguments = {
    size : randInt(20,40),
    color : randColor({
        reddish  : 0,
        greenish : 0,
        blueish  : 1
    }),
    top : 0,
    left : randInt(0, 100)
    }
    
function App() {

  return (
    <div className="App">
        <Flake  {...flakeArguments}/>
    </div>
  );
}

export default App;
