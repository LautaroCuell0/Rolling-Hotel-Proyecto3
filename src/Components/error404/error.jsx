import "./error404.css";
function Error404() {
  return (
    <>
      <div className="body-error">
        <div className="d-flex align-items-center justify-content-center div-padre-error">
          <img
            src=".//src/assets/puertaError.png"
            alt=""
            className="img-error mt-3"
          />
          <div className="text-center">
            <h1 className="titulo-error text-center">
              ERROR <br />
              404
            </h1>
        	  <a href="/">
              <button className="boton-error mb-2">
                Volver al inicio
              </button>
            </a>  
          </div>
        </div>
      </div>
    </>
  );
}
export default Error404;
