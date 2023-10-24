import React from "react";
import './detalle-hab.css'

function DetalleHab(){

     return(
        <>
        <div className="container-detalles">
            <div className="img-reservacion"><img src="https://www.hotelpaseodegracia.es/wp-content/uploads/2015/05/Hotel-Paseo-de-Gracia-Barcelona-18.jpg" alt="" /></div>
            <div className="reservacion">
               <div className="cover-check">
               <div className="checkIn">
                  <img src="https://i.pinimg.com/originals/4c/7e/90/4c7e9033546e551003dedba85b3c4f31.png" alt="" />
                  CHECKIN
                  </div>
               <div className="checkOut">
                  <img src="https://i.pinimg.com/originals/4c/7e/90/4c7e9033546e551003dedba85b3c4f31.png" alt="" />
                  CHECKOUT
               </div>
               </div>
               <div className="beneficios">
                  <ul>
                     <li>CAMA INDIVIDUAL</li>
                     <li>MANTENIMIENTO DIARIO</li>
                     <li>WIFI</li>
                     <li>BIFFET</li>
                  </ul>
               </div>
               <div className="button-reservacion"><button>RESERVAR</button></div>
            </div>
        </div>
        </>
     )
    
}

export default DetalleHab