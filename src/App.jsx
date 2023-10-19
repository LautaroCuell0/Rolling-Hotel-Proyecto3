import Carta from "./Components/Carta/Carta/Card"
import './App.css'
import CardHab from "./Components/Carta/Seccion-Hab/Card-Hab"
import ButtonWsp from "./Components/Carta/botonWsp/botonWsp"
import Carrusel from "./Components/Carta/carrusel/carrusel"
import {slides} from "./Components/Carta/carrusel/carrouselData.json"
import Footer from "./Components/Footer/footer"
import NavbarMain from "./Components/Carta/Navbar/navbar"
import Servicios from "./Components/Carta/Servicios/servicios"


function App() {


  return (
    <>
    <ButtonWsp/>
    <div className="App">
    <section className="back-img">
      <NavbarMain/>
      <Carta/>
    </section>
    <section>
      <CardHab/>
    </section>
    <section>
      <Carrusel data={slides}/>
    </section>
    <section>
      <Servicios/>
    </section>
    <section>
      <Footer/>
    </section>
     </div>
    </>
  )
}

export default App
