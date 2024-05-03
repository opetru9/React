import './slickSlider.css'

const SlickSlider = ({data}) => {
    return (       
        <div className="slider">

            {data.map( product => (
                <div className="slider_item" key={product.id}>
                        <a href="##">
                            <img src={product.img} alt={product.name}></img>
                        </a>
                        <h3><a href="##">{product.name}</a></h3>
                        <h4>{product.price} {product.currency}</h4>
                </div>
            ))}
        </div>
     );
}
 
export default SlickSlider;