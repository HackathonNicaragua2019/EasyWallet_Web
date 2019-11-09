import React from "react";

import Mision from "../../static/images/Mision.svg";
import Vision from "../../static/images/Vision.svg";
import Valores from "../../static/images/Valores.svg";

const carts = () => {
  return (
    <div>
      <div className="Container-Carts">
        {/* <Link to="/quienessomos"> */}
        <div className="Carts">
          <p className="p">Misión</p>
          <img src={Mision} className="Home" alt="" />
        </div>
        {/* </Link> */}

        {/* <Link to="/soporte"> */}
        <div className="Carts">
          <p className="p">Visión</p>
          <img src={Vision} className="Home" alt="" />
        </div>
        {/* </Link> */}

        {/* <Link to="/Maximiza"> */}
        <div className="Carts">
        <p className="p">Valores</p>
          <img src={Valores} className="Home" alt="" />
       
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default carts;
