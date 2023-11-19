import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./login.css"

export function Login() {
    const[nombre, setNombre]= useState("")
    const [contraseña, setContraseña]= useState("")
    const [error, SetError] = useState(false)
    const handleSumbit = (evento) =>{
        evento.preventDefault()
        if(nombre === "" || contraseña === ""){
            SetError(true)
            return  
        }

        SetError(false)
    }

    

    

return (
    <>

        <body className='body-login'>
            <div className='d-flex container-fluid p-0 justify-content-center align-items-center padre-login py-3'>  
            <img src=".//src/assets/ImagenDelRegistro.png" className='Imagen-Login-Logo' />
                <div className='div-padre-formulario-login d-flex justify-content-center align-items-center'>
                <form 
                className="d-flex justify-content-center align-items-center"
                onSubmit={handleSumbit}>
                    <div className='d-flex flex-column'>
                        <h2 className='titulo-login mb-3'>
                            Inicia sesion:
                        </h2>
                        <label htmlFor="">Email</label>
                        <input 
                        type="email"
                        value={nombre}
                        onChange={event => setNombre (event.target.value)}
                        className='input-registro my-2'
                        required
                        />
                        <label htmlFor="">Contraseña</label>
                        <input 
                        type="password"
                        value={contraseña}
                        onChange={event => setContraseña (event.target.value)}
                        className='input-registro my-2'
                        required
                        />
                        <a href="" className='my-2'>¿Olvidaste tu contraseña?</a>
                    <button type='sumbit' className='btn-registrarse my-2'>Iniciar Sesion</button>
            {error && <p className='p-login my-2'>Todos los campos son obligatorios.</p>}
                    </div>
                </form>
        </div>
        </div>
    </body>        
    </>
    );
}


export default Login;