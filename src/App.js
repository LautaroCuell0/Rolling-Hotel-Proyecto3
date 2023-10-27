import logo from './logo.svg';
import './App.css';
import Footer from "./Footer/footer"
import NavbarMain from "./Navbar/navbar"
import Galeria from "./Galeria/galeria"

function App() {
  return (
    <>
    <NavbarMain />
    <div className='div-galeria'>
      <h4 style={{
      alignItems:"center",
      textAlign:"center"
    }}>NUESTROS MEJORES HOTELES</h4>
      <Galeria />
    </div>
    <Footer />
    </>
  );
}

export default App;
