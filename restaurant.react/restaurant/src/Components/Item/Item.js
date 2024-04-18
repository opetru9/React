const Item = ({data}) => {
    let productsArray = [...data];

    return (
      <li className={`${productsArray[0].category}__items`}>

        {productsArray.map((product) => (

            <div className={`${product.category}__item`} key={product.id}>
                <h1>{product.name}</h1>
                <img src={product.img} alt={product.name}></img>
                <p>{product.ingredients}</p>
                <h4>{product.price} {product.currency}</h4>
            </div>

        ))}

      </li>
    );
}
 
export default Item;