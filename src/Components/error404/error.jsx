import "./error404.css"
function Error404(){
    return(
        <>
        <body className="body-error">
            
        
    <div className="d-flex align-items-center justify-content-center">
        <img src=".//src/assets/puertaError.png" alt="" className="img-error"/>
        <div className="text-center">
            <h1 className="titulo-error text-center">
                ERROR <br/>404
            </h1>
            <button class="boton-error">
                Volver al inicio
            </button>
        </div>
    </div>
    </body>
    </>
    )
}
export default Error404