import React from "react"
import './servicios.css'

function Servicios(){
    return(
        <>
        <div className="seccion-servicios">

            <div className="h1-servicios">
                <h1>NUESTROS SERVICIOS</h1>
            </div>
    <div className="container-servicios">
        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/aire-icono.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>El establecimiento contamos con aire acondicionador a la disposicion de los inquilinos</p>
            </div>
        </div>
        
        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/animales-icono.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>El hotel esta preparado para recibir y acojer a diferentes animales domesticos</p>
            </div>
        </div>

        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/atencion-icono.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>La atencion en Rolling Hotel es de 24/7 tanto en recepcio cómo telefonica</p>
            </div>
        </div>

        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/restaurante.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>El restaurante del hotel se libre y se ajusta a las necesidades del inquilino</p>
            </div>
        </div>

        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/salud-icono.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>La atencion medica del establecimiento esta disponible en todo momento</p>
            </div>
        </div>

        <div className="cover-servicios">
            <div className="servicio-img">
                <img src=".//public/imgs/wifi-icono.png" alt="" />
            </div>
            <div className="servicio-p">
                <p>Contamos con fibra optica y señal en todo el lugar con velocidad de 100mb</p>
            </div>
        </div>

    </div>
    </div>
        </>
    )
}

export default Servicios