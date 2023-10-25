import React from "react";
import './footer.css'
import { Link } from "react-router-dom";

function Footer (){
    return(
        <>
        <div className="back-footer">
        <div className="cover-footer">
            <div className="footer-hotel">
                <img src=".//public/imgs/main-logo.jpeg" alt="" />
                <div className="list-footer">
                    <ul>
                        <Link to={'/'}><li>INICIO</li></Link>
                        <Link to={'/SobreNosotros'}> <li>SOBRE NOSOTROS</li></Link>
                        <li>LOGIN</li>
                    </ul>
                </div>
            </div>
            <div className="redes-footer">

                <a href="https://twitter.com/?logout=1698201358790" target="blank"><div className="footer-X"><img src="https://bayrivercolleges.ca/files/logo-x-twitter.svg" alt="" /></div></a>
                <a href="https://www.instagram.com/" target="blank"><div className="footer-ig"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="" /></div></a>
                <a href="https://es-la.facebook.com/" target="blank"><div className="footer-tw"><img src="https://seeklogo.com/images/F/facebook-icon-black-logo-133935095E-seeklogo.com.png" alt="" /></div></a>

            </div>
        </div>
        
        </div>
        </>
    )
}

export default Footer