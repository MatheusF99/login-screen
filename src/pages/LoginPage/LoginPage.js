import React from 'react';
import capeloImg from '../../assets/images/capelo.svg'

// import { Container } from './styles';

const LoginPage = () => {
  return (
    <div className="form-content">
      <form className="form">

      </form>
      <img className="form-image" src={capeloImg}></img>
      <h1 className="form-title">Bem-vindo!</h1>

      <div className="form-inputs">

        <label className="form-label">
          <input 
            name="e-mail" 
            type="e-mail" 
            className="form-input" 
            placeholder="E-mail"
          />
        </label>
        
      </div>
      <div className="form-inputs">

        <label className="form-label">
          <input 
            name="password" 
            type="password" 
            className="form-input" 
            placeholder="Senha"
          />
        </label>

      </div>
      
    </div>
  );
}

export default LoginPage;