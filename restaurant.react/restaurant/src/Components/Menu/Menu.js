import Item from '../Item/Item';
import { useState, useRef } from "react";

import './menu.css'

const Menu = ({data}) => {

    let [searchText, setSearchText]        = useState("");
    let [incPirce, setIncPrice]            = useState(true)
    let [productsArrray, setProductsArray] = useState(data);   
    const searchCommentRef = useRef(null);
    
    function sortToggle() {

        setIncPrice(!incPirce)
        
        const sortedArray = [...productsArrray].sort((a, b) =>
            incPirce ?  b.price - a.price : a.price - b.price 
        )

        setProductsArray(sortedArray);       
    }

    function searchHandler(event){

        // let currentProducts = [...productsArrray]
        // console.log(currentProducts);

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
          {incPirce ? "^" : "v"}
        </button>

        <input type="text" onChange={searchHandler}></input>

        <div ref={searchCommentRef} className="search_comment"></div>

        <ul className="menuList">
          {productsArrray.map((product) => (
            <Item data={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
}
 
export default Menu;

