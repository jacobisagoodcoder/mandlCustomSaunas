import "./header.css"; // Importing the CSS file for styling

const Header = () => {
    return(
        <header>
            <div>
                <img src="./images/mandlLogo.jpg"/>
            </div>
            <div>
                HOME
            </div>
            <div>GALLERY</div>
            <div>TRANSFORM YOUR HOME WITH <br/><span>A CUSTOM SAUNA</span><br/> GET A FREE CONSULTATION</div>
            <div>FAQ</div>
            <div>CONTACT</div>
        </header>
    )
}

export default Header;