import React from "react";
import './botonWsp.css'

function ButtonWsp(){
    return(
        <>
         <div className="container-boton">
        <a href="https://wa.me/987654321?text=Quiero%20realizar%20un%20proyecto%20web%20php" target="_blank">
            {/* <img className="boton" src="icono.png" alt=""> */}
            <img className="boton" src=".//public/imgs/icono-wsp.png" alt="" />
        </a>
         </div>
        </>
    )
}

export default ButtonWsp