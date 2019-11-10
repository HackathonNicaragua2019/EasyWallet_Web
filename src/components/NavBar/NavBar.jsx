import React from "react";
import { Link } from "@reach/router";
import logo from "../../static/images/logo.svg";


const NavBar = () => {
  return (
    <div className="NavBar">
        <div>
        <img src={logo} alt="" className="logo" />
      <span className="Easy">EasyWallet</span>
        </div>
  

      <div className="accesos">
        <Link to="/signin">
        <p className="acceso">Ingresar</p>
        </Link>
        
       
      </div>
    </div>
  );
};
export default NavBar;
