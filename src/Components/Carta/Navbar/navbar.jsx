import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import "./navbar.css";

function NavbarMain() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function verificarTokenYCambiarEstado() {
    const cookies = document.cookie;
    const cookiesArray = cookies.split(";");
    // Buscar el valor de "token" en las cookies
    let tokenValue = null;
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = cookiesArray[i].trim();
      if (cookie.startsWith("token=")) {
        tokenValue = cookie.substring(6); // Longitud de "token="
        break;
      }
    }
    return tokenValue;
  }

  // Llamada a la función para verificar el valor de "token" y cambiar el estado
  useEffect(() => {
    // Verificar el token al cargar el componente
    const tokenValue = verificarTokenYCambiarEstado();
    if (tokenValue) {
      setLoginSuccess(true);
    }
  }, [loginSuccess]);

  function verificarAdmin() {
    const cookies = document.cookie;
    const cookiesArray = cookies.split(";");
    // Buscar el valor de "token" en las cookies
    let userValue = null;
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = cookiesArray[i].trim();
      if (cookie.startsWith("rol=")) {
        userValue = cookie.substring(4); // Longitud de "user="
        break;
      }
    }
    return userValue;
  }

  // Llamada a la función para verificar el valor de "token" y cambiar el estado
  useEffect(() => {
    // Verificar el token al cargar el componente
    const tokenValue = verificarTokenYCambiarEstado();
    const userValue = verificarAdmin();
    if (tokenValue) {
      setLoginSuccess(true);
    }
    if (userValue == "admin") {
      setIsAdmin(true);
    }
  }, [loginSuccess]);

  function borrarCookie(nombre) {
    // Establece la fecha de expiración en el pasado
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  const deslog = () => {
    alert("cerraste sesion");
    borrarCookie("token");
    borrarCookie("rol");
    setLoginSuccess(false);
  };
  return (
    <div className="cover-nav">
      <Navbar expand="lg" className="back-navbar" data-bs-theme="dark">
        <Container className="contenido">
          <Navbar.Brand href="/">
            <img
              className="img-logo"
              src="https://pbs.twimg.com/media/F_jKF07WkAEc7zs?format=jpg&name=900x900"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">INICIO</Nav.Link>
              {/* <NavDropdown title="HABITACIONES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Habitacion simple</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Habitacion doble
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Habitacion triple
                  </NavDropdown.Item>
  
                </NavDropdown> */}
              <Nav.Link href="#habitacion-seccion">HABITACIONES</Nav.Link>
              <Nav.Link href="/Galeria">GALERIA</Nav.Link>
              {loginSuccess ? (
                <Nav.Link
                  onClick={() => {
                    deslog();
                  }}
                  href=""
                >
                  CERRAR SESION
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">INICIAR SESION</Nav.Link>
              )}
              {loginSuccess ? (
                ""
              ) : (
                <Nav.Link href="/registro">REGISTRARSE</Nav.Link>
              )}
              <Nav.Link href="/SobreNosotros">SOBRE NOSOTROS</Nav.Link>
              {isAdmin ? (
                <NavDropdown title="⚙" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/crudUsers">
                    Administrador de usuarios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/crudHab">
                    Administrador de habitaciones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CrudReserva">
                    Reservas
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
