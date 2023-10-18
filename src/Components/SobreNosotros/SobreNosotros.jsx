import React from 'react'
import './SobreNosotros.css'

const SobreNosotros = () => {
  return (
    <>
        <div className='texto p-3'>
        <h2 className='text-center'>Somos Rolling Hotel </h2>
          <p>MISIÓN: Nuestra misión es brindar a nuestros huéspedes una experiencia excepcional de hospitalidad y comodidad durante su estancia. Nos esforzamos por ofrecer un ambiente acogedor y servicios de alta calidad que superen las expectativas de nuestros clientes. Estamos comprometidos con la satisfacción de nuestros huéspedes, el desarrollo de nuestro equipo y la contribución positiva a las comunidades en las que operamos.</p>
          <p>VISIÓN: Nuestra visión es ser reconocidos como el destino preferido para viajeros de todo el mundo. Nos esforzamos por ser líderes en la industria hotelera, ofreciendo alojamientos de lujo, servicios excepcionales y experiencias inolvidables. Buscamos constantemente la innovación y la sostenibilidad en nuestras operaciones y ser una fuerza positiva para el turismo y el desarrollo local.</p>
        </div>
        <section class="sobre-nosotros p-2 ">
          <div class="contenedor d-flex col-xl-6 col-md-12 ">
            <div class="contenedor-hijo d-flex imagen-con-texto mx-0">
              <img src="../src/assets/foto-lautaroC.jpeg" alt="" />
              <h6>Lautaro Cuello</h6>
              <p>Estudiante de Rolling Code</p>
            </div>

            <div class="contenedor-hijo d-flex imagen-con-texto mx-0">
              <img src="../src/assets/foto-jorge.jpeg" alt="" />
              <h6>Jorge Navarro</h6>
              <p>Estudiante de Rolling Code</p>
            </div>

            <div class="contenedor-hijo d-flex imagen-con-texto mx-0">
              <img src="../src/assets/foto-sebastian.jpeg" alt="" />
              <h6>Sebastian Vellicce</h6>
              <p>Estudiante de Rolling Code</p>
            </div>

            <div class="contenedor-hijo d-flex imagen-con-texto mx-0">
              <img src="../src/assets/foto-sol.jpeg" alt="" />
              <h6>Sol Lobo</h6>
              <p>Estudiante de Rolling Code</p>
            </div>

            <div class="contenedor-hijo d-flex imagen-con-texto mx-0">
              <img src="../src/assets/foto-ignacio.jpg" alt="" />
              <h6>Ignacio Terrazas</h6>
              <p>Estudiante de Rolling Code</p>
            </div>
          </div>
        </section >
      </>

  )
}

export default SobreNosotros