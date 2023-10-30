import Carta from "./Components/Carta/Carta/Card"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CardHab from "./Components/Carta/Seccion-Hab/Card-Hab"
import ButtonWsp from "./Components/Carta/botonWsp/botonWsp"
import Carrusel from "./Components/Carta/carrusel/carrusel"
import {slides} from "./Components/Carta/carrusel/carrouselData.json"
import Footer from "./Components/Footer/footer"
import NavbarMain from "./Components/Carta/Navbar/navbar"
import Servicios from "./Components/Carta/Servicios/servicios"
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros"
import Contacto from "./Components/Contacto/Contacto";
import HabitacionesInicio from "./Habitaciones/Habitaciones-inicio";
import DetalleHab from "./Detalles-hab/detalle-hab";
import Galeria from "./Components/Galeria/galeria"

function App() {


  return (
    <>
    <BrowserRouter>
      <NavbarMain />
      
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros/>} />
          <Route path="/" element={<>
            <ButtonWsp />
            <div className="back-img">
            <Carta />
            </div>
            <CardHab />
            <Carrusel data={slides} />
            <Servicios />
          </>
          }/>
          <Route path="/Galeria" element={<Galeria/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Habitaciones-inicio" element={<HabitacionesInicio/>} />
          <Route path="/detalle-hab" element={<DetalleHab/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
