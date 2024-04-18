import instagramIcon from '../../img/icons/instagram-icon.png'
import './overNavbar.css'

const OverNavbar = () => {
    return (
      <div className="over-nav">
        <div className="over-nav__wrapper">
          <div className="content">
            <div className="social">
              <a href="##">
                <img src={instagramIcon} alt="instagramIcon" />
              </a>
            </div>
            <div className="order-data"></div>
            <div className="open"></div>
          </div>
        </div>
      </div>
    );
}
 
export default OverNavbar;