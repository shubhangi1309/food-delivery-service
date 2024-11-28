import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtnTxt, setLoginBtnTxt] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);

  // subscribing to store using SELECTOR
  const cartItems = useSelector((store) => store.cart.items); // mention portion of store we need access to
  

  return (
    <div className="flex justify-between shadow-lg bg-gray-100 sm:bg-green-50 lg:bg-purple-100">
      <div className="logo-container">
        <img
          className="w-36 ml-10"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl">Cart - ({cartItems.length} items)</li>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <button className="login" onClick={() => {
            const btnTxt = loginBtnTxt !== "Login" ? "Login" : "Log Out";
            setLoginBtnTxt(btnTxt);
          }}>{loginBtnTxt}</button>
          <li className="font-bold px-4">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;