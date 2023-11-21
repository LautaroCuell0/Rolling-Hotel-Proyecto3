import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import appConfig from "../../../endPoints";

export function Login() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  //estado para dar el ok del login
  const redirigir = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }

    try {
      const response = await fetch(appConfig.API_BASE_URL + appConfig.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: nombre,
          password: contraseña,
        }),
      });

      if (response.status == 200) {
        // La autenticación fue exitosa, puedes redirigir al usuario a otra página.

        console.log("Inicio de sesión exitoso");
        // guardar el token que traigo desde el back con el objeto para guardarlo en una cookie y como es el objeto completo uso token.token para recibir ese valor
        const { token, rol } = await response.json();

        // Guardar el token en las cookies o en el lugar que prefieras
        document.cookie = `token=${token.token}; path=/`;
        document.cookie = `rol=${String(rol)}; path=/`;
        setLoginSuccess(true);
        alert("Iniciaste sesion correctamente");
        setTimeout(() => {
          redirigir("/");
        }, 3000);
      } else {
        // La autenticación falló, puedes manejar el error según la respuesta del servidor.
        alert("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <>
      <div className="body-login">
        <div className="d-flex container-fluid p-0 justify-content-center align-items-center padre-login py-3">
          <img
            src=".//src/assets/ImagenDelRegistro.png"
            className="Imagen-Login-Logo"
          />
          <div className="div-padre-formulario-login d-flex justify-content-center align-items-center">
            <form
              className="d-flex justify-content-center align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="d-flex flex-column">
                <h2 className="titulo-login mb-3">Inicia sesion:</h2>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  className="input-registro my-2 p-2 text-white"
                  required
                />
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  value={contraseña}
                  onChange={(event) => setContraseña(event.target.value)}
                  className="input-registro my-2 p-2 text-white"
                  required
                />
                {loginSuccess && (
                  <p className="p-login m-2"> Redirigiendo...</p>
                )}
                <button type="submit" className="btn-registrarse my-2">
                  {loginSuccess ? "Sesión Iniciada" : "Iniciar Sesión"}
                </button>
                {error && (
                  <p className="p-login my-2">
                    Todos los campos son obligatorios.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
