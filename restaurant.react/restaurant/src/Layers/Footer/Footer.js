import logoImg from '../../img/ronin_logo.jpg'
import phoneSVG from '../../img/footer/01.svg'
import locationSVG from '../../img/footer/02.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container ">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.871800326917!2d28.58916487490065!3d46.82652554152133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c987f0296a9535%3A0x5f6840db735f77d6!2sRonin%20Sushi!5e0!3m2!1sro!2s!4v1708004328623!5m2!1sro!2s"
            height={150}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={"Maps Iframe"}
          ></iframe>{" "}
        </div>
        <div className="footer__items">
          <div className="footer__item">
            <img src={logoImg} alt="ronin_logo" />
          </div>
          <div className="footer__item">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="##">Rolle</a>
              </li>
              <li>
                <a href="##">Tempura</a>
              </li>
              <li>
                <a href="##">Seturi</a>
              </li>
              <li>
                <a href="##">Salate</a>
              </li>
              <li>
                <a href="##">Bauturi</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h3>Detalii</h3>
            <ul>
              <li>
                <a href="aboutUs.html">Despre noi</a>
              </li>
              <li>
                <a href="##">Termeni & condiții</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h3>Contacte</h3>
            <div className="contacts">
              <a href="pohone icon">
                <img src={phoneSVG} alt="pohone icon" />
              </a>
              <span>
                {" "}
                <a href="tel:+37360011911">+060011911</a> /
                <a href="tel:+37369184145">+069184145</a>
              </span>
            </div>
            <div className="contacts">
              <img src={locationSVG} alt="location Icon" />
              <span>Str. Mihalacea Hincu 125/A,</span>
            </div>
            <span> Hincesti, MD-3400</span>
            <div className="contacts">
              <i className="fa-regular fa-clock"></i>
              <span>Zilnic 8:00 - 22:00</span>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          <div className="copyright__items">
            <div className="copyright__item">
              <p>© 2024 Ronin Sushi Bar. Toate drepturile sunt rezervate. </p>
            </div>
            <div className="copyright__item">
              <a href="##">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
