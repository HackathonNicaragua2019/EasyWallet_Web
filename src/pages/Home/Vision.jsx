import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import tecno from '../../static/images/tecno.png'
import logo from "../../static/images/logo.svg"
import conver from "../../static/images/conver.png"

const Vision=()=>{
    return(
        <div>
          <NavBar/>
          <img src={tecno} alt="" className="fondo1" />
          <h1 className="Mision">Visión</h1>
          <div className="contenedor_info">
                <div>
<img src={conver} alt="" className="Empresaria"/>
                </div>
                <div>
                <img src={logo} alt="" className="logg"/>
                <p className="brindar">
                Ser el software de control de inventario más utilizado por la pequeñas y medianas empresas en Nicaragua. 
                </p>
                </div>

            </div>
        
        </div>
    )
}
export default Vision