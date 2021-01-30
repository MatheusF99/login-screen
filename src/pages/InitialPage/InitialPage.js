import React from 'react';

// import { Container } from './styles';

function InitialPage() {
  return (
    <div className="">
      <div className="div-title">
        <h2>Horarios</h2>
      </div>

      <h1>Olá Pedriana</h1>
      
      <div className="div-courses">
        <p>Cursos</p>

        <span>Ver Todos</span>

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