import SlickSection from '../../Components/SlickSection/SlikSection';
import bauturiProducts from '../../Products/Bauturi';
import rolleProducts from "../../Products/Rolle";
import seturiProducts from '../../Products/Seturi';
import tempuraProducts from '../../Products/Tempura';

const MainHome = () => {
    return ( 
        <main>
            <SlickSection name={'rolle'} products={rolleProducts} category={'rolle'}/>
            <SlickSection name={'tempura'} products={tempuraProducts} category={'tempura'}/>
            <SlickSection name={'seturi'} products={seturiProducts} category={'seturi'}/>
            <SlickSection name={'bauturi'} products={bauturiProducts} category={'bauturi'}/>
        </main>
     );
}
 
export default MainHome;