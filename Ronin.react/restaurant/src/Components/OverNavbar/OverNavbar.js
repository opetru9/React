import OpenData from './overNavComponents/OpenData';
import OrderData from './overNavComponents/OrderData';
import './overNavbar.css'
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const OverNavbar = () => {
    return (
      <div className="over-nav">
        <div className="over-nav__wrapper">
          <div className="content">
            <div className="social">
              <Link href="##">
                <InstagramIcon
                  fontSize="medium"
                />
              </Link>
            </div>
            <OrderData />
            <OpenData />
          </div>
        </div>
      </div>
    );
}
 
export default OverNavbar;