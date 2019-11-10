import React from "react";
import tecno from "../../static/images/tecno.png";
import logo from "../../static/images/logo.svg";
import NavBar from "../../components/NavBar/NavBar";
import trato from "../../static/images/trato.png";

const Valores = () => {
  return (
    <div>
      <NavBar />
      <img src={tecno} alt="" className="fondo1" />
      <h1 className="Mision">Valores</h1>
      <div className="contenedor_info">
        <div>
          <img src={trato} alt="" className="Empresaria" />
        </div>
        <div>
          <img src={logo} alt="" className="logg" />
          <p className="brindar">
            -Integridad 
            -Innovación 
            -Vocación de servicio 
            -Responsabilidad social 
          </p>
        </div>
      </div>
    </div>
  );
};
export default Valores;
