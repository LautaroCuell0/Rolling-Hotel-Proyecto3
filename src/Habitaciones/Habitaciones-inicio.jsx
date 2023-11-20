import React from "react";
import './Habitaciones-inicio.css'
import ButtonWsp from "../Components/Carta/botonWsp/botonWsp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "react";

function HabitacionesInicio() {
    const urlbase = 'http://localhost:4000/api'

    const [habitacionData, sethabitacionData] = useState([])
    useEffect(() => {
      const fetchHabitacionData = async () => {
        const {data} = await axios ({
            method : "get",
            url : `${urlbase}/habitaciones`,
            params : {}
        })

        console.log(data);
      }
    
      fetchHabitacionData()  
    }, [])
    



    return (
        <>
        <ButtonWsp/>
        <section className="habitacion-seccion">
        <div>
            <div className="ofertas-hab">
                <div className="h1-ofertas"><h1>DESCUBRE NUESTRAS OFERTAS SEMANALES </h1></div>
                <section className="carrousel-oferts">
                     <img src="https://hotelvilaramerica.com/images/Habitacion-Hotel-3-Estrellas.jpg" alt="" />
                     <img src="https://media.ambito.com/p/0c5616e28bf58d0403a76b5cc372f420/adjuntos/239/imagenes/036/681/0036681201/1200x675/smart/2jpg.jpg" alt="" />
                     <img src="https://elcomercio.pe/resizer/oELX9gvQqEPgP6NPrhNbCOmoTF4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2RXWOY2R65B23H5MNB7SUH4DUE.jpg" alt="" />
                </section>
                <button>RESERVAR YA!</button>
            </div>
            <div className="cover-ofert">
            <div className="cardOfert-habitacion">
                 <img src='https://www.hotelmedici.com/images/stories/camere/singola_1200/singola_1_1200.jpg' alt="" />
                 <div className="info-ofertCard">
                    <h2>HABITACION SIMPLE</h2>
                    <ul>
                        <li>MANTENIMIENTO DIARIO</li>
                        <li>WIFI</li>
                        <li>BUFFET</li>
                    </ul>
                    <Link to={'/detalle-hab'}><button>VER MAS</button></Link>
                 </div>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default HabitacionesInicio