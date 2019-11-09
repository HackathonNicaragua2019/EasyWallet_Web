import React from "react";

import logo from "../../static/images/logo.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
        <div>
        <img src={logo} alt="" className="logo" />
      <span className="Easy">EasyWallet</span>
        </div>
  

      <div className="accesos">
        <p className="acceso">EasyWallet</p>
        <p className="acceso">Mision</p>
        <p className="acceso">Vision</p>
        <p className="acceso">valores</p>
      </div>
    </div>
  );
};
export default NavBar;
