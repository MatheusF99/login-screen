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
                        <input type="text"/>
                    </div>

                </div>

                <div className="page">
                    
                    <div className="field">
                        <label htmlFor="">Qual o turno?</label>
                        <select className="select" name="turn" id="turn">
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