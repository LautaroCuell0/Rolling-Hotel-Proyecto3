import React from 'react'
// import './CrudHab.css'

const CrudHab = () => {
    return (
        <>
            <div className='cover-container'>
                <div className="container-max  cover-form">

                    <form className="input-group shadow rounded p-3" >
                        <div className='container-form'>
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Imagen 1"
                            />
                            <input className="form-control"
                                name='' required
                                type="text"
                                placeholder="Imagen 2"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Imagen 3"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Imagen 4"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Titulo"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Descripción 1"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Descripción 2"
                            />
                            <input className="form-control"
                                name=''
                                required
                                type="text"
                                placeholder="Descripción 3"
                            />
                            <input className="btn btn-primary"   type="submit" value='Agegar'/>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default CrudHab