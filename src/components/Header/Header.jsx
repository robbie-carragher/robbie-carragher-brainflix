// import "./Header.scss";
// import "./../../styles/partials/_global.scss";
// import avatarImage from "./../../../src/assets/images/Mohan-muruge.jpg";
// import logoImage from "./../../../src/assets/images/Logo/BrainFlix-logo.svg";

// // import FileUploadComponent from "../upload button";

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className=" header__links--left">
//         <a href="/"> <img src={logoImage} alt="Logo" className="header__links"></img></a>
//       </nav>
//       <div className="header__links header__links--right">
//         <div className="header__search-container">
//           <input type="search" id="search-box" placeholder="Search..." />
//           <img src={avatarImage}  alt="Avatar Image" className="header__avatar-preview"></img>
//         </div>
//       </div>
//       <div className="header__upload-btn">UPLOAD</div>
    
//     </header>





//     <header className="header2">
//       <nav className=" header2__links--left">
//         <a href="/"> <img src={logoImage} alt="Logo" className="header2__links"></img></a>
//       </nav>
//       <div className="header2__links header2__links--right">
//         <div className="search-container">
//           <input type="search" id="search-box" placeholder="Search..." />
//         </div>

//          <div className="header2__upload-btn">UPLOAD</div>

//         <img src={avatarImage}  alt="Avatar Image" className="header2__avatar-preview"></img>
        
//       </div>
//     </header>
//   );
// };

// export default Header;

import "./Header.scss";
import "./../../styles/partials/_global.scss";
import avatarImage from "./../../../src/assets/images/Mohan-muruge.jpg";
import logoImage from "./../../../src/assets/images/Logo/BrainFlix-logo.svg";

// import FileUploadComponent from "../upload button";

const Header = () => {
  return (
    <div> {/* Add this div as a parent wrapper */}
      <header className="header">
        <nav className="header__links--left">
          <a href="/"> <img src={logoImage} alt="Logo" className="header__links"></img></a>
        </nav>
        <div className="header__links header__links--right">
          <div className="header__search-container">
            <input type="search" id="search-box" placeholder="Search..." />
            <img src={avatarImage}  alt="Avatar Image" className="header__avatar-preview"></img>
          </div>
        </div>
        <div className="header__upload-btn">UPLOAD</div>
      </header>

      <header className="header2">
        <nav className="header2__links--left">
          <a href="/"> <img src={logoImage} alt="Logo" className="header2__links"></img></a>
        </nav>
        <div className="header2__links header2__links--right">
          <div className="search-container">
            <input type="search" id="search-box" placeholder="Search..." />
          </div>

          <div className="header2__upload-btn">UPLOAD</div>

          <img src={avatarImage}  alt="Avatar Image" className="header2__avatar-preview"></img>
          
        </div>
      </header>
    </div> 
  );
};

export default Header;


