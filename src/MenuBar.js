import React from "react";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div className="menubar">
      <img
        className="menubar_logo"
        src="https://i5.walmartimages.com/dfw/4ff9c6c9-a434/k2-_1bb03040-99ca-4841-b495-6fab9b5473f0.v1.jpg"
        alt="Walmart-MenuBar"
      />
      <div className="menubar_text">
        <span className="menubar_LineOne">
          Fake Walmart is here to help make every day easier.
        </span>
        <span className="menubar_LineTwo">Learn more</span>
      </div>
    </div>
  );
}

export default MenuBar;
