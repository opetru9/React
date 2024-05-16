import SlickSection from '../../Components/SlickSection/SlikSection';
import './main.css'
import rolleProducts from "../../Products/Rolle";
import tempuraProducts from '../../Products/Tempura';

const Main = () => {
    return ( 
        <main>
            <SlickSection name={'rolle'} products={rolleProducts}/>
            <SlickSection name={'tempura'} products={tempuraProducts}/>
        </main>
     );
}
 
export default Main;