import facebook from "./../../img/icons/facebook.svg";
import git from "./../../img/icons/gitHub.svg";
import linked from "./../../img/icons/linkedIn.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.facebook.com/profile.php?id=100008771324979"
                target="_blank" rel="noreferrer"
              >
                <img src={facebook} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/opetru9" target="_blank" rel="noreferrer">
                <img src={git} alt="GitHub" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/olaru-petru-2129312ba/"
                target="_blank" rel="noreferrer"
              >
                <img src={linked} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Olaru Petru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
