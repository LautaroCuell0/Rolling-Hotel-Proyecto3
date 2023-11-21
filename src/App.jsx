import Carta from "./Components/Carta/Carta/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardHab from "./Components/Carta/Seccion-Hab/Card-Hab";
import ButtonWsp from "./Components/Carta/botonWsp/botonWsp";
import Carrusel from "./Components/Carta/carrusel/carrusel";
import { slides } from "./Components/Carta/carrusel/carrouselData.json";
import Footer from "./Components/Footer/footer";
import NavbarMain from "./Components/Carta/Navbar/navbar";
import Servicios from "./Components/Carta/Servicios/servicios";
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros";
import Contacto from "./Components/Contacto/Contacto";
import HabitacionesInicio from "./Habitaciones/Habitaciones-inicio";
import DetalleHab from "./Detalles-hab/detalle-hab";
import Galeria from "./Components/Galeria/galeria";
import UserList from "./Admin/crudUsers";
import Login from "./Components/login/login";
import Registro from "./Components/registro/registro";
import CrudHab from "./Admin/CrudHab";
import Error404 from "./Components/error404/error";
import MyCalendario from "./Calendario/calendario";
import Reserva from "./Admin/CrudReserva";
import { Logout } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMain />

        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/"
            element={
              <>
                <ButtonWsp />
                <div className="back-img">
                  <Carta />
                </div>
                <CardHab />
                <Carrusel data={slides} />
                <Servicios />
              </>
            }
          />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route
            path="/Habitaciones-inicio/:tipoHabitacion"
            element={<HabitacionesInicio />}
          />
          <Route path="/detalle-hab" element={<DetalleHab />} />
          <Route path="/crudUsers" element={<UserList />} />
          <Route path="/CrudHab" element={<CrudHab />} />
          <Route path="/CrudReserva" element={<Reserva />} />
          <Route path="/calendario" element={<MyCalendario />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
