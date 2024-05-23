import SlickSection from '../../Components/SlickSection/SlikSection';
import bauturiProducts from '../../Products/Bauturi';
import rolleProducts from "../../Products/Rolle";
import seturiProducts from '../../Products/Seturi';
import tempuraProducts from '../../Products/Tempura';

const MainHome = () => {
    return ( 
        <main>
            <SlickSection name={'rolle'} products={rolleProducts}/>
            <SlickSection name={'tempura'} products={tempuraProducts}/>
            <SlickSection name={'seturi'} products={seturiProducts}/>
            <SlickSection name={'bauturi'} products={bauturiProducts}/>
        </main>
     );
}
 
export default MainHome;