import {Component, withCoordinates, withDirection} from './helpers'
import './styleSnake.scss'


// Snake parts:
let SnakeHead = withCoordinates( withDirection( Component ) )
let SnakeTail = withCoordinates( withDirection( Component ) )

const Snake = () => {

    return (
      <Component name='snake'>
        <SnakeHead name="snake__head" top={200} left={150} dir={"up"} />
        <SnakeTail name="snake__tail" top={264} left={150} dir={"up"} />
      </Component>
    );
}
 
export default Snake;
 

 