import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [loginBtnTxt, setLoginBtnTxt] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            const btnTxt = loginBtnTxt !== "Login" ? "Login" : "Log Out";
            setLoginBtnTxt(btnTxt);
          }}>{loginBtnTxt}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
