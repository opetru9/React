import Item from '../Item/Item';
import { useState, useRef } from "react";
import './menu.css'

const Menu = ({data}) => {

    let [searchText, setSearchText]        = useState("");
    let [incPrice, setIncPrice]            = useState(true)
    let [productsArray, setProductsArray] = useState(data);   
    const searchCommentRef = useRef(null);
    
    function sortToggle() {

        setIncPrice(!incPrice)
        
        const sortedArray = [...productsArray].sort((a, b) =>
            incPrice ?  b.price - a.price : a.price - b.price 
        )

        setProductsArray(sortedArray);       
    }

    function searchHandler(event){

        let inputText = event.target.value.toLowerCase()
        setSearchText(inputText);

        if(inputText.length >= 3){
            const filteredArray = data.filter(
                product => product.name.toLowerCase().includes(inputText)
            )
            setProductsArray(filteredArray);

            if(filteredArray.length > 0){
                searchCommentRef.current.innerText = `Results for ' ${inputText} ' :`;
            }else{
                searchCommentRef.current.innerText = `No Results for '${inputText}':`;
            }
        }else{
            searchCommentRef.current.innerText = ''
            setProductsArray(data);
            setIncPrice(true)
        }  
    }

  
    return (
      <div className="menu">
        <button className="sortBtn" onClick={sortToggle}>      
          {incPrice ? "^" : "v"}
        </button>

        <input type="text" onChange={searchHandler}></input>

        <div ref={searchCommentRef} className="search_comment"></div>

        <ul className="menuList">
          {productsArray.map((product) => (
            <Item data={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
}
 
export default Menu;

