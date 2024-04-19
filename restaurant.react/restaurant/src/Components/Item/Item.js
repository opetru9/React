const Item = ({data}) => {
    
    return (
      <li className={`${data.category}__items`}>


            <div className={`${data.category}__item`} key={data.id}>
                <h1>{data.name}</h1>
                <img src={data.img} alt={data.name}></img>
                <p>{data.ingredients}</p>
                <h4>{data.price} {data.currency}</h4>
            </div>


      </li>
    );
}
 
export default Item;