import {Component, withCoordinates, withDirection} from './helpers'
import './styleSnake.scss'


// Snake parts:
let SnakeHead = withCoordinates( withDirection( Component ) )
let SnakeBody = withCoordinates( withDirection( Component ) )
let SnakeTail = withCoordinates( withDirection( Component ) )

const Snake = ({ data : {children} }) => {

    return (
      <Component name='snake'>
        {children.map((childData, idx) => {

          return (childData.name ==="snake__head" && <SnakeHead key={`k-${idx}`} {...childData}/>) 
                  ||
                 (childData.name ==="snake__body" && <SnakeBody key={`k-${idx}`} {...childData}/>) 
                  ||
                 (childData.name ==="snake__tail" && <SnakeTail key={`k-${idx}`} {...childData}/>) 

        })}

        
      </Component>
    );
}
 
export default Snake;
 

 