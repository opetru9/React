import { useState, useEffect} from 'react'
import "./navbar.css"

const Navbar = () => {
    
    let [onTop, setOnTop] = useState(true)
    let [open, setOpen]   = useState(false)

    useEffect(() => {
      document.addEventListener("scroll", () => {

        let scroll = document.documentElement.scrollTop;

        if (scroll === 0) {
          setOnTop(true);
        } else {
          setOnTop(false);
        }
      });

    }, [onTop]);


    return (
      <div>
        <nav className={onTop ? "main-navbar " : "main-navbar active"}>
          <a href="index.html" className={onTop ? "logo active" : "logo"}>
            {" "}
          </a>
          <ul className="navbar-menu-list">
            <li>
              <a href="##">ROLLE</a>
            </li>
            <li>
              <a href="##">TEMPURA</a>
            </li>
            <li>
              <a href="##">SETURI</a>
            </li>
            <li>
              <a href="##">SALATE</a>
            </li>
            <li>
              <a href="##">BAUTURI</a>
            </li>
            <li>
              <a href="aboutUs.html">DESPRE NOI </a>
            </li>
          </ul>
        </nav>
        <div
          className={`${open ? "ham-menu active" : "ham-menu"} 
                      ${onTop ?  "":"scroll" }`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={open ? "off-screen-menu active" : "off-screen-menu"}>
          <ul className="osm-list">
            <li>
              <a href="##">ROLLE</a>
            </li>
            <li>
              <span>𪜨</span>
            </li>
            <li>
              <a href="##">TEMPURA</a>
            </li>
            <li>
              <span>𪜢</span>
            </li>
            <li>
              <a href="##">SETURI</a>
            </li>
            <li>
              <span>𪜸</span>
            </li>
            <li>
              <a href="##">SALATE</a>
            </li>
            <li>
              <span>𪜺</span>
            </li>
            <li>
              <a href="##">BAUTURI</a>
            </li>
            <li>
              <span>𪜻</span>
            </li>
            <li>
              <a href="##">DESPRE NOI</a>
            </li>
          </ul>
        </div>
      </div>
    );
}
 
export default Navbar;