import React from 'react';

import './initialPage.css'
// import { Container } from './styles';

function InitialPage() {
  return (
    <div className="initial-div">
      <div className="div-title">
        <h2>Horarios</h2>
      </div>

      <h1 className='text-hello'>Olá Pedriana</h1>
      
      <div className="info-courses">
        <div className="title-courses">
          <p>Cursos</p>
          <span>Ver Todos</span>
        </div>
        
        <div className="div-courses">
          <div className="course">
            <p>Sistemas de informaçoes</p>
            <p>8 Periodo</p>
            <p>Noturno</p>
          </div>
          {/* <div className="course">
            <p>Sistemas de informaçoes</p>
            <p>8 Periodo</p>
            <p>Noturno</p>
          </div>
          <div className="course">
            <p>Sistemas de informaçoes</p>
            <p>8 Periodo</p>
            <p>Noturno</p>
          </div>
          <div className="course">
            <p>Sistemas de informaçoes</p>
            <p>8 Periodo</p>
            <p>Noturno</p>
          </div>
          <div className="course">
            <p>Sistemas de informaçoes</p>
            <p>8 Periodo</p>
            <p>Noturno</p>
          </div> */}
        </div>
      </div>
      <p>Inicio</p>

      <div className="div-register">
        <i>icone</i>
        <p>cadastrar professor</p>
      </div>
    </div>
  );
}

export default InitialPage;