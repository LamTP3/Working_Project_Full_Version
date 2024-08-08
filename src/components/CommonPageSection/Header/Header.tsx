import "./Header.scss";
import LogoComp from "../Logo/LogoComp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <Link to="/" className="header-left cursor-pointer">
          <LogoComp size="medium" />
          <h2 className="header-logo-text">Galaxy Pad</h2>
        </Link>
        <div className="header-mid flex">
          <Link className="mr-3 cursor-pointer" to="/list">
            Projects
          </Link>
          <Link className="mr-3cursor-pointer" to="/">
            Add Project
          </Link>
        </div>
        <div className="header-right">
          <div className="header-welcome">
            <p className="header-text-welcome">Welcome</p>
            <p className="header-text-name"> Admin!</p>
          </div>
          <button className="header-logout-btn">logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
