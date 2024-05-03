import SlickSection from '../../Components/SlickSection/SlikSection';
import './main.css'
import rolleProducts from "../../Products/Rolle";

const Main = () => {
    return ( 
        <main>
            <SlickSection name={'rolle'} products={rolleProducts}/>
        </main>
     );
}
 
export default Main;