import instagramIcon from '../../img/icons/instagram-icon.png'
import OpenData from './overNavComponents/OpenData';
import OrderData from './overNavComponents/OrderData';
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
              <OrderData/>
              <OpenData/>
          </div>
        </div>
      </div>
    );
}
 
export default OverNavbar;