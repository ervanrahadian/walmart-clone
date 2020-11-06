import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header1">
        <div className="line1">
          <span>Pickup & delivery</span>
        </div>
        <div className="line2">
          <span>Walmart.com</span>
        </div>
      </div>
      <div className="header2">
        <Link to="/">
          <img
            className="header_logo"
            src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg"
            alt="Walmart-Logo"
          />
        </Link>
        <div className="header_search">
          <input
            className="header_searchInput"
            type="text"
            placeholder="Search Fake Walmart.com"
          />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user && "/signin"}>
            <div onClick={handleAuthentication} className="header_list">
              <PermIdentityOutlinedIcon className="icon" />
              <span className="account_list">
                {user ? user.email : "Account"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header_list">
              <SystemUpdateAltIcon className="icon" />
              <span className="reorder_list">Reorder</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="header_list">
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="cart_list">{cart?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
