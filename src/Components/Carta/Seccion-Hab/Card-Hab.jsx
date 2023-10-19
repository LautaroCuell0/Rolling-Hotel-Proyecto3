import React from "react";
import './Card-Hab.css'
import {Link} from 'react-router-dom'

function CardHab(){
      return(
        <>
        <div className="cover-cover-cards-hab">
            <div className="h2-cards-hab"><h2>SELECCIONA TU HABITACIONES</h2></div>
        <div className="cover-cards-hab">

        <div className="card-hab">
        <div className="titulo-hab">
            <h4>HABITACION SIMPLE</h4>
        </div>
        <div className="img-hab">
            <img src="https://www.derbyhotels.com/files/img/img_s/as-single-4-782.jpg" alt="" />
        </div>
        <div className="button-hab">
            <Link to="/Habitaciones-inicio"><button>VER</button></Link>
        </div>
        </div>

        <div className="card-hab">
        <div className="titulo-hab">
            <h4>HABITACION DOBLE</h4>
        </div>
        <div className="img-hab">
            <img src="https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-doble-catalonia-620x412.jpg" alt="" />
        </div>
        <div className="button-hab">
            <button>VER</button>
        </div>
        </div>


        <div className="card-hab">
        <div className="titulo-hab">
            <h4>HABITACION TRIPLE</h4>
        </div>
        <div className="img-hab">
            <img src="https://www.hoteloceanic.fr/wp-content/uploads/sites/46/2022/09/20220913_112700-1-800x600.jpg" alt="" />
        </div>
        <div className="button-hab">
            <button>VER</button>
        </div>
        </div>

        </div>
        </div>
        </>
      )
}

export default CardHab