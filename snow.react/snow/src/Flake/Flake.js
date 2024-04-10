import './Flake.css'
import { randColor, randInt } from '../helpers/generators'

function Flake({
    size = randInt(20,40),
    color = randColor({
        reddish  : 0,
        greenish : 0,
        blueish  : 1
    })
 }) {
    const style = {
        '--size': `${size}px`,
        '--color': color,
    }

    return(
        <div 
            style={style}
            className='flake' >   
        </div>
    )
}

export default Flake