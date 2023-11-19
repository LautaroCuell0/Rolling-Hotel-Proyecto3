import { useState, useEffect } from "react";
import "./registro.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function Registro() {
  const formInicial = {
    username: "",
    email: "",
    password: "",
  };
  const [usuario, setUsuario] = useState(formInicial);
  //agregado
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  //--------------------
  const handleInpitChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };
  //agregado
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setMensaje("Usuario registrado exitosamente");
        setUsuario(formInicial);
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || "Error al registrar usuario");
        setMensaje("");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setError("Error de red");
      setMensaje("");
    }
  };
  //-------------------------------------------
  return (
    <>
      <div className="body-registro">
        <div className="d-flex container-fluid p-0 padre-registro py-3">
          <img
            src=".//src/assets/ImagenDelRegistro.png"
            className="Imagen-Registro-Logo "
          />
          <div className="div-padre-formulario d-flex justify-content-center ">
            <Form
              action=""
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center "
            >
              <div className="d-flex flex-column">
                <h2 className="titulo-registro mb-5">Registrate:</h2>
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  name="username"
                  id="nombre"
                  required
                  // value={usuario.name}
                  className="input-registro my-2"
                  onChange={handleInpitChange}
                />
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  // value={usuario.email}
                  className="input-registro my-2"
                  onChange={handleInpitChange}
                />
                <label htmlFor="">Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-registro my-2"
                  onChange={handleInpitChange}
                  required
                />
                <label htmlFor="">Confirmar contraseña:</label>
                <input
                  type="password"
                  name="repassword"
                  id="repassword"
                  className="input-registro my-2"
                  onChange={handleInpitChange}
                  required
                />
                <button type="sumbit" className="btn-registrarse p-2 mt-5">
                  Registrarse
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
