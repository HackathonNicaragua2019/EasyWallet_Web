import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Carts from "../../components/carts/carts"

import store from "../../static/images/12.png";
import fondo from "../../static/images/fondo.png";
import check from "../../static/images/check.svg";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className="h1">EasyWallet</h1>
        <p className="tex">
          La nueva y potente herramienta de control,venta y distribución de
          inventario
        </p>
     
        <img src={store} className="img" alt="" />

        <div className="checkList">
          <div className="item">
          <img src={check} alt="" /> 
          <p className="ck">Encuentra clientes potenciales a los que apuntar para que puedas aumentar las ventas</p>
          </div>
          <div className="item">
          <img src={check} alt="" />
          <p className="ck">Automatiza todos tus procesos </p>
          </div>
          <div className="item">
          <img src={check} alt="" />
          <p className="ck">Alcance su máximo potencial para competir efectivamente con empresas líderes</p>
          </div>
        </div>

      </div>

      <div>
        <div>
        <img src={fondo} alt=""  />
        </div>
      
        <Carts/>

      </div>
    </div>
  );
};

export default HomePage;
