import './Flake.css'
import { useEffect, useState} from 'react'

function Flake({
    size = 0,
    color = 0,
    top = 0,
    left = 0,
    whenDone = () =>{ throw new Error( 'whenDone callback, not assign !!')}
    }){

    // flake falling using "useState()"
    let [_top, setTop] = useState(top);

    useEffect(() => {

        if (_top < 100){
            setTimeout(() => {
            setTop(_top + 10);
          }, 500);
        }else{
            whenDone() /* when top > 100 , whenDone assign a false value to showChild 
                            and the component "Flake" is canceled from the DOM */
        }
    })

    const style = {
        '--size' : `${size}px`,
        '--color':    color   ,
        '--top'  : `${_top}%` ,
        '--left' : `${left}%` ,
    }

    return (
        <div 
            style={style}
            className='flake' >   
        </div>
    )
    
}

export default Flake