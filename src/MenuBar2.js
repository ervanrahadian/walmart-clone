import React from "react";
import "./MenuBar2.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function MenuBar2() {
  return (
    <div className="menubar2">
      <img
        className="menubar2_logo"
        src="http://logok.org/wp-content/uploads/2014/05/Walmart-Logo-880x645.png"
        alt="Walmart-Logo"
      />
      <div className="menubar2_text">
        <span>Checkout</span>
      </div>
      <Link to="/cart">
        <div className="menubar2_icon">
          <ShoppingCartOutlinedIcon />
        </div>
      </Link>
    </div>
  );
}

export default MenuBar2;
