import React from 'react';
import './RegisterPage.css'
// import { Container } from './styles';

function RegisterPage() {
  return (
      <div className="container">

          <div className="form-outer">
            <div className="nav-bar">
                <a className="prev-1 prev"> &lt;- </a>
                <a className="next"> Proximo </a>
            </div>
              <form action="#">

                  <div className="page">
                      
                      <div className="field">
                        <label htmlFor=""> Qual o nome do curso? </label>
                        <select name="" id="">
                            <option value="">Sistemas de informação</option>
                            <option value="">Direito</option>
                            <option value="">Estetica</option>
                        </select>
                      </div>

                  </div>

                  <div className="page">
                      
                      <div className="field">
                        <label htmlFor="">Qual o turno</label>
                        <select name="" id="">
                            <option value="">Matutino</option>
                            <option value="">vespertino</option>
                            <option value="">Noturno</option>
                        </select>
                      </div>

                  </div>

              </form>

          </div>

      </div>
  );
}

export default RegisterPage;