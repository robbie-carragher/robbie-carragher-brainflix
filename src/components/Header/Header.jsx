
import "./Header.scss";
import "./../../styles/partials/_global.scss";
import avatarImage from "./../../../src/assets/images/Mohan-muruge.jpg";
import logoImage from "./../../../src/assets/images/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

export default function Header()  {
  return (
    <div>
      <header className="header">
        <nav className="header__links--left">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="header__links" />
          </Link>
        </nav>
        <div className="header__links header__links--right">
          <div className="header__search-container">
            <input type="search" id="search-box" placeholder="Search" />
            <img
              src={avatarImage}
              alt="Avatar Image"
              className="header__avatar-preview"
            ></img>
          </div>
        </div>

        <Link to="/uploads" className="header__link-mobile">
          <div className="header__upload-btn">
            <img
              src="/src/assets/images/Icons/upload.svg"
              alt="Upload Icon"
              className="header__upload-icon"
            />
            UPLOAD
          </div>
        </Link>
      </header>

      <header className="header2">
        <nav className="header2__links--left">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="header2__links" />
          </Link>
        </nav>
        <div className="header2__links header2__links--right">
          <div className="search-container">
            <input type="search" id="search-box" placeholder="Search" />
          </div>

          <Link to="/uploads">
            <div className="header2__upload-btn">
              <img
                src="/src/assets/images/Icons/upload.svg"
                alt="Upload Icon"
                className="header2__upload-icon"
              />
              UPLOAD
            </div>
          </Link>

          <img
            src={avatarImage}
            alt="Avatar Image"
            className="header2__avatar-preview"
          />
        </div>
      </header>
    </div>
  );
}




