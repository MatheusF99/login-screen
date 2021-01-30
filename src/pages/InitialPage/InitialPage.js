import React from 'react';

import './initialPage.css'
// import { Container } from './styles';

const InitialPage = () => {
  return (
    <div className="initial-div">
      <div className="div-title">
        <h2>Horarios</h2>
      </div>

      <h1 className='text-hello'> <strong>Olá</strong>  Pedriana!</h1>
      
        <div className="title-courses">
          <p>Cursos</p>
          <span>Ver Todos</span>
        </div>
      <div className="info-courses">
        
        <div className="div-courses">

          <div className="course">
            <p>Sistemas de informaçoes</p>
            <div className="data-course">
              <span>8 Periodos</span>
              <span>Noturno</span>
            </div>
          </div>

          <div className="course">
            <p>Direito</p>
            <div className="data-course">
              <span>12 Periodos</span>
              <span>matutino</span>
            </div>
          </div>

          <div className="course">
            <p>Sistemas de informaçoes</p>
            <div className="data-course">
              <span>8 Periodos</span>
              <span>Noturno</span>
            </div>
          </div>

          <div className="course">
            <p>Direito</p>
            <div className="data-course">
              <span>12 Periodos</span>
              <span>matutino</span>
            </div>
          </div>

        </div>
      </div>

      <div className="div-register">
        <p className='register-title'>Inicio</p>
        <div className="box-register">
          <i>icone</i>
          <span>cadastrar professor</span>
        </div>
      </div>
    </div>
  );
}

export default InitialPage;