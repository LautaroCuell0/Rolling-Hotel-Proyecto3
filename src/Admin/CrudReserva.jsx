import { useEffect, useState } from 'react';
import './CrudReserva.css';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import appConfig from "../../endPoints";
import Table from 'react-bootstrap/Table';

function Reserva() {
    const urlBase = appConfig.API_BASE_URL + appConfig.RESERVAS;
    const [reload, setReload] = useState(false)
    
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
            ...todoEdit,
            [name]: value,
        })
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
                    method: "patch",
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
                setreservaData(data.reservas)
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
                            name="fechaEntrada"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Fecha Entrada"
                            required
                        />
                        <input
                            className="form-control"
                            name="fechaSalida"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Fecha Salida"
                            required
                        />
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Nombre y apellido"
                            required
                        />
                        <input
                            className="form-control"
                            name="email"
                            type="text"
                            onChange={(e) => handleEditChange(e)}
                            placeholder="Email"
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
            <div className='cover-titulo'>
        <h2>Elementos Agregados</h2>
             </div>
        <Table striped="columns">
      <thead>
        <tr>
            <th>Fecha Entrada</th>
            <th>Fecha Salida</th>
            <th className='habitacion'>Habitacion</th>
            <th className='nombreyapellido'>Nombre y Apellido</th>
            <th className='email'>Email</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {reservaData && reservaData.length > 0 ? (
              reservaData.map((reserva) => (
                <tr key={reserva._id}>
                  <td style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{reserva.fechaEntrada}</td>
                  <td style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{reserva.fechaSalida}</td>
                  <td className='habitacion'>{reserva.habitacion}</td>
                  <td className='nombreyapellido'>{reserva.nombre}</td>
                  <td className='email'>{reserva.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setTodoEdit((todoEdit) => ({ ...todoEdit, id: reserva._id, habitacion: reserva.habitacion}));
                        handleShow();
                      }}
                    >
                      ✏️
                    </button>{" "}
                    <button onClick={() => handleDelete(reserva._id)}>🗑️</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No hay reservas disponibles</td>
              </tr>
            )}
      </tbody>
    </Table>
      </div>

        </>
    );
}

export default Reserva;
