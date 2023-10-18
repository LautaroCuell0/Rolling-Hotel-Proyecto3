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


function App() {


  return (
    <>
    <BrowserRouter>
      <NavbarMain />
      
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros/>} />
          <Route path="/" element={<>
            <ButtonWsp />
            <Carta />
            <CardHab />
            <Carrusel data={slides} />
            <Servicios />
          </>
          }/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
