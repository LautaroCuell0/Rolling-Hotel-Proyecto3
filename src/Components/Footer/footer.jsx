import React from "react";
import './footer.css'

function Footer (){
    return(
        <>
        <div className="back-footer">
        <div className="cover-footer">
            <div className="footer-hotel">
                <img src=".//public/imgs/main-logo.jpeg" alt="" />
                <div className="list-footer">
                    <ul>
                        <li>INICIO</li>
                        <li>SOBRE NOSOTROS</li>
                        <li>LOGIN</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer