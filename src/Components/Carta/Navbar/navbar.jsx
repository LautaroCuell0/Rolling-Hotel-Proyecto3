import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.css'

function NavbarMain() {



  return (

    <div className='cover-nav'>
      <Navbar expand="lg" className="back-navbar" data-bs-theme="dark">
        <Container className='contenido'>
          <Navbar.Brand href="/"><img className='img-logo' src=".//public/imgs/main-logo.jpeg" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">INICIO</Nav.Link>
              <NavDropdown title="HABITACIONES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Habitacion simple</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Habitacion doble
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Habitacion triple
                </NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="/Galeria">GALERIA</Nav.Link>
              <Nav.Link >LOGIN</Nav.Link>
              <Nav.Link >REGISTRO</Nav.Link>
              <Nav.Link href='/SobreNosotros' >SOBRE NOSOTROS</Nav.Link>
              <NavDropdown title="⚙" id="basic-nav-dropdown">
                <NavDropdown.Item href="/crudUsers">Administrador de usuarios</NavDropdown.Item>
                <NavDropdown.Item href="/crudHab">Administrador de habitaciones</NavDropdown.Item>
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