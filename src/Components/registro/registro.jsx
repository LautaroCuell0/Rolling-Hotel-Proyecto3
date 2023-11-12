import { useState } from 'react';
import './registro.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap"


function Registro() {


const formInicial = {
    id: null,
    name:'',
    email:''
}
const [usuario, setUsuario] = useState(formInicial);
const handleInpitChange = (event) =>{
    const{name,value}= event.target.value
    setUsuario({...user,[name] : value})
}
    return (
    <>
    <body className='body-registro'>
            <div className='d-flex container-fluid p-0 padre-registro'>  
                <img src=".//src/assets/ImagenDelRegistro.png" className='Imagen-Registro-Logo' />
                <div className='div-padre-formulario d-flex justify-content-center '>
                    <Form action="" 
                    onSubmit={event=>{
                        event.preventDefault();
                        props.addUser(usuario)
                        setUsuario(formInicial)
                    }} 
                    className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column'>
                        <h2 className='titulo-registro mb-5'>
                            Registrate:
                        </h2>
                        <label htmlFor="">Nombre:</label>
                        <input 
                        type="text" 
                        name='nombre' 
                        id='nombre'
                        required
                        // value={usuario.name}
                        className='input-registro my-2'
                        onChange={handleInpitChange}
                        />
                        <label htmlFor="">Email:</label>
                        <input 
                        type="email"
                        name='email'
                        id='email'
                        required
                        // value={usuario.email}
                        className='input-registro my-2'
                        onChange={handleInpitChange}
                        />
                        <label htmlFor="">Contraseña:</label>
                        <input 
                        type="password"
                        name='password'
                        id='password'
                        className='input-registro my-2'
                        onChange={handleInpitChange}
                        required
                        />
                        <label htmlFor="">Confirmar contraseña:</label>
                        <input 
                        type="password"
                        name='repassword'
                        id='repassword'
                        className='input-registro my-2'
                        onChange={handleInpitChange}
                        required
                        />
                        <button type='sumbit' className='btn-registrarse p-2 mt-5'>Registrarse</button>
                        </div>
                    </Form>
                </div>
            </div>  
    </body>    
    </>
    );
}

export default Registro;