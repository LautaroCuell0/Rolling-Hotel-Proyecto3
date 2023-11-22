import React from "react";
import "./Habitaciones-inicio.css";
import ButtonWsp from "../Components/Carta/botonWsp/botonWsp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import appConfig from "../../endPoints";

function HabitacionesInicio() {
  const parametroHabitacion = useParams();
  const [habitacionData, sethabitacionData] = useState([]);
  useEffect(() => {
    const fetchHabitacionData = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: appConfig.API_BASE_URL + appConfig.HABITACIONES,
          params: {
            tipo: parametroHabitacion.tipoHabitacion,
          },
        });
        sethabitacionData(data.habitaciones);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHabitacionData();
  }, []);

  return (
    <>
      <ButtonWsp />
      <section className="habitacion-seccion">
        <div>
          <div className="ofertas-hab">
            <div className="h1-ofertas">
              <h1>DESCUBRE NUESTRAS HABITACIONES </h1>
            </div>
            <section className="carrousel-oferts">
              <img
                src="https://hotelvilaramerica.com/images/Habitacion-Hotel-3-Estrellas.jpg"
                alt=""
              />
              <img
                src="https://media.ambito.com/p/0c5616e28bf58d0403a76b5cc372f420/adjuntos/239/imagenes/036/681/0036681201/1200x675/smart/2jpg.jpg"
                alt=""
              />
              <img
                src="https://elcomercio.pe/resizer/oELX9gvQqEPgP6NPrhNbCOmoTF4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2RXWOY2R65B23H5MNB7SUH4DUE.jpg"
                alt=""
              />
            </section>
            <button>CONTACTANOS!</button>
          </div>
          {habitacionData.map((habitacion) => (
            <div key={habitacion._id} className="cover-ofert">
              <div className="cardOfert-habitacion">
                <img src={habitacion.imagen1} alt="" />
                <div className="info-ofertCard">
                  <h2>{habitacion.titulo}</h2>
                  <ul>
                    <li>{habitacion.descripcion1}</li>
                    <li>{habitacion.descripcion2}</li>
                    <li>{habitacion.descripcion3}</li>
                    <li>precio: {habitacion.precio}</li>
                  </ul>
                  <Link to={"/detalle-hab"}>
                    <button>VER MAS</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HabitacionesInicio;
