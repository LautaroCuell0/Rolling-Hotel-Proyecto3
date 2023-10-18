import React from "react";
import './Card.css'
import { Link } from 'react-router-dom';

function Carta(){
    return(
        <>
          <div className="cover-clasCard">
        <div className="clas-card">
            <div className="clas-presentacion">
                <h1>BIENVENIDO</h1>
                <h2>ROLLING-HOTEL</h2>
                <div className="clas-button"><Link to="/Contacto"><button>CONTACTANOS</button></Link>
            </div>
            </div>
            <div className="clas-img">
                <img src="https://x.cdrst.com/foto/hotel-sf/5c97/granderesp/hotel-presidente-exterior-7828ef2.jpg" alt="" />
            </div>
        </div>
        </div>
        </>
    )
}

export default Carta