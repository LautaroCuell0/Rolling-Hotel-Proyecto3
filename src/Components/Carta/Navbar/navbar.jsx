import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import "./navbar.css";

function NavbarMain() {
  const [loginSuccess, setLoginSuccess] = useState(false);

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
    if (tokenValue) {
      console.log('Valor de "token" encontrado:', tokenValue);
    } else {
      console.log('Valor de "token" no encontrado');
      // Puedes manejar la lógica si el valor no se encuentra
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

  return (
    <div className="cover-nav">
      <Navbar expand="lg" className="back-navbar" data-bs-theme="dark">
        <Container className="contenido">
          <Navbar.Brand href="/">
            <img
              className="img-logo"
              src=".//public/imgs/main-logo.jpeg"
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
              <Nav.Link href="/Habitaciones-inicio">HABITACIONES</Nav.Link>
              <Nav.Link href="/Galeria">GALERIA</Nav.Link>
              {loginSuccess ? (
                <Nav.Link href="/profile">PERFIL</Nav.Link>
              ) : (
                <Nav.Link href="/login">INICIAR SESION</Nav.Link>
              )}
              <Nav.Link href="/SobreNosotros">SOBRE NOSOTROS</Nav.Link>
              <NavDropdown title="⚙" id="basic-nav-dropdown">
                <NavDropdown.Item href="/crudUsers">
                  Administrador de usuarios
                </NavDropdown.Item>
                <NavDropdown.Item href="/crudHab">
                  Administrador de habitaciones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Reservas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
