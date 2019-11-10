import React from 'react'
import tecno from '../../static/images/tecno.png'
import logo from "../../static/images/logo.svg"
import NavBar from '../../components/NavBar/NavBar'
import empresaria from "../../static/images/empresaria123.png"

const Mision=()=>{
    return(
        <div>
            <NavBar/>
            <img src={tecno} alt="" className="fondo1" />
            <h1 className="Mision">Misión</h1>
            <div className="contenedor_info">
                <div>
<img src={empresaria} alt="" className="Empresaria"/>
                </div>
                <div>
                <img src={logo} alt="" className="logg"/>
                <p className="brindar">
                Brindar a las pequeñas y medianas empresas un software de control de inventario confiable que les permita alcanzar su máximo potencial y competir con empresas líderes en su industria. 
                </p>
                </div>

            </div>
        </div>
    )
}
export default Mision