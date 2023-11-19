import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./login.css"

export function Login() {
    const[nombre, setNombre]= useState("")
    const [contraseña, setContraseña]= useState("")
    const [error, SetError] = useState(false)
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    

    const handleSumbit = (evento) =>{
        evento.preventDefault()
        if(nombre === "" || contraseña === ""){
            SetError(true)
            return  
        }

        SetError(false)
    }

    

    function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
}

  return (
    <>

        {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
            Login
        {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
        ))}
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0 d-flex'>
            <div className='d-flex container-fluid p-0'>  
            <img src=".//src/assets/ImagenDelRegistro.png" className='Imagen-Registro-Logo' />
                <div className='div-padre-formulario d-flex justify-content-center '>
                <form 
                className="d-flex justify-content-center align-items-center"
                onSubmit={handleSumbit}>
                    <div className='d-flex flex-column'>
                        <label htmlFor="">Email</label>
                        <input 
                        type="text"
                        value={nombre}
                        onChange={event => setNombre (event.target.value)}
                        className='input-registro my-2'
                        />
                        <label htmlFor="">Contraseña</label>
                        <input 
                        type="password"
                        value={contraseña}
                        onChange={event => setContraseña (event.target.value)}
                        className='input-registro my-2'
                        />
                        <a href="" className='my-2'>¿Olvidaste tu contraseña?</a>
                    <button type='sumbit' className='btn-registrarse my-2'>Iniciar Sesion</button>
            {error && <p className='p-login my-2'>Todos los campos son obligatorios.</p>}
                    </div>
                </form>
        </div>
        </div>
            </Modal.Body>
            
    </Modal>
    </>
    );
}


export default Login;