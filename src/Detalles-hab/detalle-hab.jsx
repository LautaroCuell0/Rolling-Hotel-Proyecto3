import React from "react";
import "./detalle-hab.css";
import MyCalendario from "../Calendario/calendario";
import { useState, useEffect } from "react";
import appConfig from "../../endPoints";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetalleHab() {
  const urlBase = appConfig.API_BASE_URL + appConfig.RESERVAS;
  const urlHabitacion = appConfig.API_BASE_URL + appConfig.HABITACIONES;

  const habitacion = useParams();
  const [habitacionData, setHabitacionData] = useState({});
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [formClient, setFormClient] = useState({
    nombre: "",
    email: "",
  });
  async function handleReserva() {
    const formData = {
      ...formClient,
      fechaEntrada: new Date(checkin),
      fechaSalida: new Date(checkout),
      habitacion: habitacion.idHabitacion,
    };
    if (confirm("Desea realizar esta reserva?")) {
      try {
        const { data } = await axios({
          method: "post",
          url: urlBase,
          data: formData,
        });
        alert(`reserva realizada para el dia: ${data.newReserva.fechaEntrada}`);
      } catch (error) {
        console.log(error.response.data);
        alert("Llene todos los campos");
      }
      console.log(formData);
    } else alert("Operación Cancelada");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormClient({
      ...formClient,
      [name]: value,
    });
  }
  useEffect(() => {
    const fetchHabitacionData = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: urlHabitacion,
          params: { idHabitacionBuscada: habitacion.idHabitacion },
        });
        const habitacionEncontrada = data.habitaciones.filter(
          (item) => item._id === habitacion.idHabitacion
        );
        console.log(data.habitaciones);
        setHabitacionData(habitacionEncontrada[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHabitacionData();
  }, []);

  return (
    <>
      <div className="container-detalles">
        <div className="img-reservacion">
          <img src={habitacionData ? habitacionData.imagen1 : ""} alt="" />
        </div>
        <div className="reservacion">
          <input
            className="form-control"
            name="nombre"
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Nombre y Apellido"
            required
          />
          <input
            className="form-control"
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            required
          />
          <div className="cover-check">
            <div className="checkIn">
              <MyCalendario setDate={setCheckin} />
            </div>
            <div className="checkOut">
              <MyCalendario setDate={setCheckout} />
            </div>
          </div>
          <div className="beneficios">
            <ul>
              <li>{habitacionData ? habitacionData.titulo : ""}</li>
              <li>{habitacionData ? habitacionData.descripcion1 : ""}</li>
              <li>{habitacionData ? habitacionData.descripcion2 : ""}</li>
              <li>{habitacionData ? habitacionData.descripcion3 : ""}</li>
              <li>{habitacionData ? habitacionData.precio : ""}</li>
            </ul>
          </div>
          <div className="button-reservacion" onClick={handleReserva}>
            <button>RESERVAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleHab;
