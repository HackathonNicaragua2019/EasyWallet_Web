import React from 'react'
import tecno from '../../static/images/tecno.png'
import NavBar from '../../components/NavBar/NavBar'
import empresaria from "../../static/images/empresaria123.png"

const Mision=()=>{
    return(
        <div>
            <NavBar/>
            <img src={tecno} alt="" className="fondo1" />
            <h1 className="Mision">Mision</h1>
            <div className="contenedor_info">
                <div>
<img src={empresaria} alt="" className="Empresaria"/>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}
export default Mision