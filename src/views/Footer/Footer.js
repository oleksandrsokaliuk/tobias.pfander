import ContactImage from "./../../assets/contact.jpg";
import LinkedIn from "./../../assets/linkedin.svg";
import Xing from "./../../assets/xing.svg";
import Facebook from "./../../assets/facebook.svg";
import Instagram from "./../../assets/instagram.svg";
import ScrollBackToTop from "../../helpers/ScrollBackToTop/ScrollBackToTop";




function Footer() {
  return (
    <footer className="contact-footer" id="contacts">
      <div className="contact-footer__top">
        <div className="contact-footer__top__content">
          <h2>
            <span>Tobias</span>
            <span>Pfander</span>
          </h2>
          <div>
            <div>
              <span>Mobil:</span>
              <a href="tel:+4917661632717">0176 616 32 717</a>
            </div>
            <a href="mailto:kontakt@tobiaspfander.de">
              kontakt@tobiaspfander.de
            </a>
          </div>
        </div>
        <img src={ContactImage} alt="Tobias Pfander" className="contact-footer__top__image"/>
      </div>
      <div className="contact-footer__bottom">
          <a href="https://de.linkedin.com/in/tobias-pfander-08491215a" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="linkedin link"/>LinkedIn</a>
          <a href="https://www.xing.com/profile/Tobias_Pfander" target="_blank" rel="noopener noreferrer"><img src={Xing} alt="xing link"/>Xing</a>

          <a href="https://www.facebook.com/tobias.pfander" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook link"/>Facebook</a>
          <a href="https://www.instagram.com/tobias.pfander" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram link"/>Instagram</a>
      </div>
      <div className="impressum">
        <a href="/impressum">Impressum</a>
      </div>
      <ScrollBackToTop/>
    </footer>
  );
}

export default Footer;
