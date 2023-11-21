import React, { useState, useEffect } from "react";
import "./CrudHab.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import appConfig from "../../endPoints";

const CrudHab = () => {
  const urlBase = appConfig.API_BASE_URL + appConfig.HABITACIONES;
  const [reload, setReload] = useState(false);
  //formulario de req.body para la creacion de una habitacion
  const [dataForm, setDataForm] = useState({
    titulo: "",
    imagen1: "",
    descripcion1: "",
    descripcion2: "",
    descripcion3: "",
    precio: "",
    tipo: "",
  });
  const [habitacionesData, sethabitacionesData] = useState([]);
  //formulario de req.body para editar una habitacion
  const [editForm, setEditForm] = useState({
    ...dataForm,
    id: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //manejo de cambios en formulario de edicion
  function handleEditChange(e) {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  }

  //manejo de cambios en formulario de creacion
  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  }
  //manejo de creacion de habitacion
  async function handleSubmit() {
    try {
      const { data } = await axios({
        method: "post",
        url: urlBase,
        data: dataForm,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //manejo de eliminacion de habitacion
  async function handleDelete(idHabitaciones) {
    if (confirm("Desea elimina esta Habitación?")) {
      try {
        const { data } = await axios({
          method: "delete",
          url: urlBase,
          params: { id: idHabitaciones },
        });
        alert("Habitación Eliminada");
        setReload(!reload);
      } catch (error) {
        console.log(error);
      }
    } else alert("Operación Cancelada");
  }
  //manejo de edicion de habitacion
  async function handleEdit() {
    if (confirm("Desea actualizar esta habitación?")) {
      try {
        const { data } = await axios({
          method: "put",
          url: urlBase,
          data: editForm,
        });
        alert("Habitación Editada");
        setReload(!reload);
      } catch (error) {
        console.log(error);
      }
    } else alert("Operación Cancelada");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(urlBase);
        sethabitacionesData(data.habitaciones);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

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
              <th>Titulo</th>
              <th>Imagen</th>
              <th>Descripción 1</th>
              <th>Descripción 2</th>
              <th>Descripción 3</th>
              <th>Precio</th>
              <th>Tipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {habitacionesData.map((hab) => (
              <tr key={hab._id}>
                <td>{hab.titulo}</td>
                <td>{hab.imagen1}</td>
                <td>{hab.descripcion1}</td>
                <td>{hab.descripcion2}</td>
                <td>{hab.descripcion3}</td>
                <td>{hab.precio}</td>
                <td>{hab.tipo}</td>
                <td>
                  <button
                    onClick={() => {
                      setEditForm((editForm) => ({ ...editForm, id: hab._id }));
                      handleShow();
                    }}
                  >
                    ✏️
                  </button>{" "}
                  <button onClick={() => handleDelete(hab._id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-2">
        <div className="container-form">
          <form id="formHabitaciones" onSubmit={handleSubmit}>
            <input
              className="form-control"
              name="titulo"
              type="text"
              onChange={handleChange}
              placeholder="Titulo"
              required
            />
            <input
              className="form-control"
              name="imagen1"
              type="text"
              onChange={handleChange}
              placeholder="Imagen"
              required
            />
            <input
              className="form-control"
              name="descripcion1"
              type="text"
              onChange={handleChange}
              placeholder="Descripción"
              required
            />
            <input
              className="form-control"
              name="descripcion2"
              type="text"
              onChange={handleChange}
              placeholder="Descripción"
              required
            />
            <input
              className="form-control"
              name="descripcion3"
              type="text"
              onChange={handleChange}
              placeholder="Descripción"
              required
            />
            <input
              className="form-control"
              name="precio"
              type="number"
              onChange={handleChange}
              placeholder="Precio"
              required
            />
            <input
              className="form-control"
              name="tipo"
              type="number"
              onChange={handleChange}
              placeholder="Tipo"
              required
            />
            <button type="submit" htmlFor="formHabitaciones">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CrudHab;
