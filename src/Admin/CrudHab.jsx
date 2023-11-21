import React, { useState } from 'react';
import './CrudHab.css';

const CrudHab = () => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleImageChange = (event) => {
        const fileList = event.target.files;
        const newImages = [];
        for (let i = 0; i < fileList.length; i++) {
            newImages.push(URL.createObjectURL(fileList[i]));
        }
        setImages(newImages);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleAddItem = () => {
        if (!title || !description || images.length === 0 || !price) {
            alert('Por favor, complete todos los campos');
            return;
        }
        const newItem = {
            images: [...images],
            title,
            description,
            price,
        };
        setItems([...items, newItem]);
        setImages([]);
        setTitle('');
        setDescription('');
        setPrice('');
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('¿Estás seguro que deseas eliminar este elemento?');
        if (confirmDelete) {
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
        }
    };
    

    const handleEdit = (index) => {
        const itemToEdit = items[index];
        setTitle(itemToEdit.title);
        setDescription(itemToEdit.description);
        setPrice(itemToEdit.price);
        setImages([...itemToEdit.images]);
        setEditIndex(index);
    };

    const handleSaveEdit = () => {
        if (!title || !description || images.length === 0 || !price) {
            alert('Por favor, complete todos los campos');
            return;
        }
        const updatedItems = [...items];
        updatedItems[editIndex].title = title;
        updatedItems[editIndex].description = description;
        updatedItems[editIndex].price = price;
        updatedItems[editIndex].images = [...images];
        setItems(updatedItems);
        setEditIndex(-1);
        setImages([]);
        setTitle('');
        setDescription('');
        setPrice('');
    };

    const isEditMode = editIndex !== -1;

    return (
        <>
            <div className="container-1">
                <h2>Elementos Agregados</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    {item.images.map((img, i) => (
                                        <img key={i} src={img} alt={`Imagen ${i}`} width="50" />
                                    ))}
                                </td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        className="btn btn-sm btn-warning ml-2"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="container-2">
                <h2>{isEditMode ? 'Editar Objeto' : 'Agregar Nuevo Objeto'}</h2>
                <div className='container-form'>
                    <input
                        className="form-control"
                        type="file"
                        onChange={handleImageChange}
                        multiple
                        required
                    />
                    <input
                        className="form-control"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Título"
                        required
                    />
                    <input
                        className="form-control"
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Descripción"
                        required
                    />
                    <input
                        className="form-control"
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Precio"
                        required
                    />
                    <input
                        className="btn btn-primary"
                        type="button"
                        value={isEditMode ? 'Guardar Cambios' : 'Agregar Objeto'}
                        onClick={isEditMode ? handleSaveEdit : handleAddItem}
                    />
                    {isEditMode && (
                        <button
                            className="btn btn-secondary ml-2"
                            onClick={() => {
                                setEditIndex(-1);
                                setImages([]);
                                setTitle('');
                                setDescription('');
                                setPrice('');
                            }}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default CrudHab;
