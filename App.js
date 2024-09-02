import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://st3.depositphotos.com/14353516/31848/v/380/depositphotos_318487254-stock-illustration-fast-delivery-scooter-vector-cartoon.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">

            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //Root Level Component
