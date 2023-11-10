import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        enviarEmail()
    }
    function enviarEmail () {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "lobosol62@gmail.com",
            Password : "4182099208B192C102B58D2EFAFAAF903D86",
            To : 'lautarocuello630@gmail.com',
            From : "lobosol62@gmail.com",
            Subject : "Rolling Hotel",
            Body : `Mensaje de ${formData.nombre}: ${formData.mensaje}. Email: ${formData.email}`
        }).then((message) => alert(message));
    }


    return (
        <>
            <div className='container row p-5 '>
                <div className='col-md-6'>
                    <h3>Contactanos</h3>
                    <Form className='md-6' onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="nombre">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="ingrese su nombre"
                                className=""
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email@example.com"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor='mensaje'>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                type='text'
                                id='mensaje'
                                name='mensaje'
                                placeholder='Ingrese su mensaje'
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" type='submit'  >Enviar</Button>
                        </div>
                    </Form>
                </div>

                <div className='col-md-6'>
                    <img src="../src/assets/img-contactanos.webp" alt="" style={{ width: "400px", height: "400px" }} className='img-fluid' />
                </div>

            </div>
        </>
    )
}

export default Contacto;