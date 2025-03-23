import "../styles/header.css";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header>
      <div className="defaultHeader">
        <div>
          <a href="/">
            <img src="./images/mandlLogo.jpg" alt="Mandl Custom Saunas" />
          </a>
        </div>
        <div>
          <a href="/">HOME</a>
        </div>
        <div>GALLERY</div>
        <div>
          TRANSFORM YOUR HOME WITH <br />
          <span>A CUSTOM SAUNA</span>
          <br /> GET A FREE CONSULTATION
        </div>
        <div>FAQ</div>
        <div>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
      <div id="hamburgerIcon">
        <HamburgerIcon />
      </div>
      <div id="mobileImg">
        <img src="./images/mandlLogo.jpg" />
      </div>
      <div className="mobileHeader">
        <div>
          <a href="/">HOME</a>
        </div>
        <div>GALLERY</div>
        <div>FAQ</div>
        <div>
          <a href="/contact">CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
