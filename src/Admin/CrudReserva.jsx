import { useState } from 'react';
import './CrudReserva.css';

function Reserva(){
    const [todoArray, setTodoArray] = useState([
        {
            FechaEntrada: 'nayeli',
            FechaSalida: 'nayeli1@gmail.com',
            id: 1,
            Usuario: 'juan111',
            Habitacion: 'Habitacion simple 11232'
        },
        {
            FechaEntrada: 'santi',
            FechaSalida: 'santi1@gmail.com',
            id: 2,
            Usuario: 'juan222',
            Habitacion: 'Habitacion doble 11233'
        }
    ]);

    const [formData, setFormData] = useState({
        FechaEntrada: '',
        FechaSalida: '',
        Usuario: '',
        Habitacion: ''
    });

    const [todoEditId, setTodoEditId] = useState(null);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (todoEditId !== null) {
            const newTodo = [...todoArray];
            let todo = newTodo.find((todo) => todo.id === todoEditId);
            todo.FechaEntrada = formData.FechaEntrada;
            todo.FechaSalida = formData.FechaSalida;
            todo.Usuario = formData.Usuario;
            todo.Habitacion = formData.Habitacion;
            setTodoArray(newTodo);
            setTodoEditId(null);
            setFormData({ FechaEntrada: '', FechaSalida: '', Usuario: '', Habitacion: '' });
        } else {
            if (formData.FechaEntrada !== '' && formData.FechaSalida !== '' && formData.Usuario !== '' && formData.Habitacion !== '') {
                const todo = {
                    FechaEntrada: formData.FechaEntrada,
                    FechaSalida: formData.FechaSalida,
                    id: Date.now(),
                    Usuario: formData.Usuario,
                    Habitacion: formData.Habitacion
                };

                setTodoArray([...todoArray, todo]);
                setFormData({ FechaEntrada: '', FechaSalida: '', Usuario: '', Habitacion: '' });
            }
        }
    };

    const deleteTodo = (id) => {
        const confirmDelete = window.confirm('¿Estás seguro que deseas eliminarlo? La eliminación será permanente');

        if (confirmDelete) {
            const newTodos = todoArray.filter((todo) => todo.id !== id);
            setTodoArray(newTodos);
        }
    };

    const todoEdit = (id) => {
        const todo = todoArray.find((todo) => todo.id === id);
        setFormData({
            FechaEntrada: todo.FechaEntrada,
            FechaSalida: todo.FechaSalida,
            Usuario: todo.Usuario,
            Habitacion: todo.Habitacion
        });
        setTodoEditId(id);
    };

    return (
        <>
            <div className="cover-container">
                <div className="container-max cover-form">
                    <form className="input-group shadow rounded p-3" onSubmit={addTodo} formulario>
                        <div className="container-form">
                            <input
                                className="form-control"
                                name="FechaEntrada"
                                required
                                minlength="5"
                                type="text"
                                placeholder="Fecha de Entrada"
                                value={formData.FechaEntrada}
                                onChange={handleChange}
                            />
                            <input
                                className="form-control"
                                name="FechaSalida"
                                required
                                minlength="5"
                                type="text"
                                placeholder="Fecha de Salida"
                                value={formData.FechaSalida}
                                onChange={handleChange}
                            />
                            <input
                                className="form-control"
                                name="Usuario"
                                required
                                minlength="5"
                                type="text"
                                placeholder="Usuario"
                                value={formData.Usuario}
                                onChange={handleChange}
                            />
                            <input
                                className="form-control" name="Habitacion" required minlength="5" type="text" placeholder="Habitacion" value={formData.Habitacion} onChange={handleChange}/>
                            <input className="btn btn-primary" type="submit" value="Agregar" />
                        </div>
                    </form>
                </div>

                <div className="shadow rounded p-3 mt-5 w-100 cover-container">
                    <div className="container-delete-tareas">
                        <h4>RESERVAS</h4>
                    </div>
                    {todoArray.map((todo) => (
                        <div key={todo.id} className="elementos-todo">
                            <p className={`p-0 m-0 flex-grow-1`}>
                                <span className='text-muted'>Fecha de Entrada: {todo.FechaEntrada}</span><br />
                                <span className='text-muted'>Fecha de Salida: {todo.FechaSalida}</span><br />
                                <span className='text-muted'>Usuario: {todo.Usuario}</span><br />
                                <span className='text-muted'>Habitacion: {todo.Habitacion}</span>
                            </p>
                            <button className='btn btn-warning' onClick={() => todoEdit(todo.id)}>✏</button>
                            <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>🗑</button>
                        </div>
                    ))}
                    <div className='total-info'>
                        <span>Total de Reservas: {todoArray.length}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reserva;
