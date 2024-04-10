import './Flake.css'
import { useState} from 'react'

function Flake({
    size = 0,
    color = 0,
    top = 0,
    left = 0
    })
{
    // flake falling using "useState()"
    let [_top, setTop] = useState(top);
    let [removeComponent, setRemoveComponent] = useState(false); /* HW1.2 */

    setTimeout(() => {
        if( _top <= 100 ){ /* HW1.1 */
            setTop(_top + 10)
        }else{
            setRemoveComponent(true); 
        }
    },1000)


    const style = {
        '--size' : `${size}px`,
        '--color':  color     ,
        '--top'  : `${_top}%`  ,
        '--left' : `${left}%` ,
    }

        if(removeComponent){
            return  null
        }else{
            return (
                <div 
                    style={style}
                    className='flake' >   
                </div>
        )}
    
}

export default Flake