import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Carts from "../../components/carts/carts"

import store from "../../static/images/12.png";
import fondo from "../../static/images/fondo.png";
import check from "../../static/images/check.svg";
import stock from "../../static/images/stock.jpg"
import pay from "../../static/images/payment.jpg"

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
          <div className="items">
          <img src={check} alt="" /> 
          <p className="ck">Encuentra clientes potenciales a los que apuntar para que puedas aumentar las ventas</p>
          </div>
          <div className="items">
          <img src={check} alt="" />
          <p className="ck">Automatiza todos tus procesos </p>
          </div>
          <div className="items">
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
      
        <div >
         
          <div className="container-img">

            <section className="section-img">
              <img src={stock} className="stock" alt="" />
              <p className="p1">Ahórrate dolores de cabeza
               y dinero con un sistema
               de control de inventarios confiable,
              practico y facil de usar acorde a tus necesidades.​</p>
            </section>

            <section className="section-img1">
            <p className="p2">Una de las formas en que puede mejorar y mantener su negocio es estableciendo y cultivando una buena relación con su clientes por 
            lo que traemos la funcionalidad de compras en linea y entregas a domicilio.</p>
              <img src={pay} className="pay" alt="" />
              
            </section>

          </div>
        </div>
        

      </div>
    </div>
  );
};

export default HomePage;
