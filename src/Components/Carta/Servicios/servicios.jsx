import React from "react"
import './servicios.css'

function Servicios(){
    return(
        <>
        <div className="cover-ser">
            <div className="servicio-contenedor">
                <div className="titulo-servicio"><h1>COMODIDADES Y PRESTACIONES</h1></div>
                 <div className="servicios-iconos">
                        <img src=".//public/imgs/aire-icono.png" alt="" />
                        <img src=".//public/imgs/animales-icono.png" alt="" />
                        <img src=".//public/imgs/atencion-icono.png" alt="" />
                        <img src=".//public/imgs/restaurante.png" alt="" />
                        <img src=".//public/imgs/salud-icono.png" alt="" />
                        <img src=".//public/imgs/wifi-icono.png" alt="" />
                 </div>
            </div>
        </div>
        </>
    )
}

export default Servicios