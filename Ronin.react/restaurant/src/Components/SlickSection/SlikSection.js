import SlickSlider from '../SlickSlider/SlickSlider';
import './slickSection.css'


const SlickSection = ({name, products}) => {
    return (
      <section className={`${name}-carousel section-carousel`}>
        <div className="container">

          <div className="title-container">
            <h2 className="section-title">{`${name}`}</h2>
          </div>

          <SlickSlider data={products}/>

        </div>
      </section>
    );
}
 
export default SlickSection;