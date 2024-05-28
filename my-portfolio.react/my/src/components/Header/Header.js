import './header.css'
import cv from '../../docs/cv.Olaru.pdf'

const header = () => {
    return (
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Petru</em>
            </strong>{" "}
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href={cv} download={"cv.Olaru.pdf"} className="btn">
            Download CV
          </a>
        </div>
      </header>
    );
}
 
export default header;