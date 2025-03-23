import "../styles/header.css";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header>
      <div className="defaultHeader">
        <div>
          <img src="./images/mandlLogo.jpg" />
        </div>
        <div>HOME</div>
        <div>GALLERY</div>
        <div>
          TRANSFORM YOUR HOME WITH <br />
          <span>A CUSTOM SAUNA</span>
          <br /> GET A FREE CONSULTATION
        </div>
        <div>FAQ</div>
        <div>CONTACT</div>
      </div>
      <div id="hamburgerIcon"><HamburgerIcon/></div>
      <div className="mobileHeader">
        <div><img src="./images/mandlLogo.jpg" /></div>
        <div>HOME</div>
        <div>GALLERY</div>
        <div>FAQ</div>
        <div>CONTACT</div>
        </div>
    </header>
  );
};

export default Header;
