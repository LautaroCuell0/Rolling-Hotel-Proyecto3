import { useEffect, useState } from 'react';
import './CrudReserva.css';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import appConfig from "../../endPoints";

function Reserva() {
    const urlBase = appConfig.API_BASE_URL + appConfig.RESERVAS;
    const [reload, setReload] = useState(false)
    //formulario de req.body para la creacion de reservas
    const [todoArray, setTodoArray] = useState({
        fechaEntrada: '',
        fechaSalida: '',
        habitacion: '',
        nombre: '',
        email: '',
    })
    const [reservaData, setreservaData] = useState([]);
    //formulario de req.body para editar una reserva
    const [todoEdit, setTodoEdit] = useState({
        ...reservaData,
        id: ""
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //manejo de cambios de formulario de edicion
    function handleEditChange(e) {
        const { name, value } = e.target;
        setTodoEdit({
            todoEdit,
            [name]: value,
        })
    }
    //manejo de cambios en formulario de creacion 
    function handleChange(e) {
        const { name, value } = e.target;
        setTodoArray({
            ...todoArray,
            [name]: value
        })
    }
    //manejo de creacion de reservas
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const { data } = await axios({
                method: "post",
                url: urlBase,
                data: todoArray
            })
        } catch (error) {
            console.log(error);
        }
    }
    //manejo de eliminacion de reservas
    async function handleDelete(idReservas) {
        if (confirm("Desea eliminar esta reserva?")) {
            try {
                const { data } = await axios({
                    method: "delete",
                    url: urlBase,
                    params: { id: idReservas }
                })
                alert("Reserva eliminada")
                setReload(!reload)
            } catch (error) {
                console.log(error);
            }
        } else alert("operacion cancelada")
    }
    //manejo de edicion de reservas
    async function handleEdit() {
        if (confirm("Desea actualizar esta reserva?")) {
            try {
                const { data } = await axios({
                    method: "put",
                    url: urlBase,
                    data: todoEdit
                })
                alert("Reserva editada")
                setReload(!reload)
            } catch (error) {
                console.log(error);
            }
        } else alert("Operacion cancelada")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(urlBase)
                setreservaData(data.Reserva)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [reload])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <input
                            className="form-control"
                            name="titulo"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Titulo"
                            required
                        />
                        <input
                            className="form-control"
                            name="imagen1"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Imagen"
                            required
                        />
                        <input
                            className="form-control"
                            name="descripcion1"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Descripción"
                            required
                        />
                        <input
                            className="form-control"
                            name="descripcion2"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Descripción"
                            required
                        />
                        <input
                            className="form-control"
                            name="descripcion3"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Descripción"
                            required
                        />
                        <input
                            className="form-control"
                            name="precio"
                            type="number"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Precio"
                            required
                        />
                        <input
                            className="form-control"
                            name="tipo"
                            type="number"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Tipo"
                            required
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleEdit();
                            handleClose();
                        }}
                    >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
        <h2>Elementos Agregados</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Fecha Entrada</th>
              <th>Fecha Salida</th>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {reservaData && reservaData.length > 0 ? (
              reservaData.map((reserva) => (
                <tr key={reserva._id}>
                  <td>{reserva.fechaEntrada}</td>
                  <td>{reserva.fechaSalida}</td>
                  <td>{reserva.habitacion}</td>
                  <td>{reserva.nombre}</td>
                  <td>{reserva.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setTodoEdit((todoEdit) => ({ ...todoEdit, id: reserva._id}));
                        handleShow();
                      }}
                    >
                      ✏️
                    </button>{" "}
                    <button onClick={() => handleDelete()}>🗑️</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No hay reservas disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
            <div className="cover-container">
                <div className="container-max cover-form">
                    <form className="input-group shadow rounded p-3" id='formReservas' onSubmit={handleSubmit}>
                        <div className="container-form">
                            <input
                                className="form-control"
                                name="fechaEntrada"
                                required
                                type="text"
                                placeholder="Fecha de Entrada"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control"
                                name="fechaSalida"
                                required
                                type="text"
                                placeholder="Fecha de Salida"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control"
                                name="nombre"
                                required
                                type="text"
                                placeholder="Nombre y Apellido"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control"
                                name="email"
                                required
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <button type='submit' htmlFor="formReservas" >Agregar</button>
                        </div>
                    </form>
                </div>


                <div className='total-info'>
                    <span>Total de Reservas: {todoArray.length}</span>
                </div>
            </div>

        </>
    );
}

export default Reserva;
