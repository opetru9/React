import Item from '../Item/Item';
import './menu.css'

const Menu = ({data}) => {
    return ( 
        <ul  className="menu">
            <Item data={data}/>
        </ul>
     );
}
 
export default Menu;