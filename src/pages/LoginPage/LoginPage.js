import React from 'react';

import capeloImg from '../../assets/images/capelo.svg'

import './style.css'
// import { Container } from './styles';

const LoginPage = () => {
  return (
    <div className="form-content">

      <form className="form">

        <div  className="form-image">
          <img alt="capelo" src={capeloImg}></img>
        </div>

        <div className="form-inputs">
        <h1 className="form-title">Bem-Vindo!</h1>

          <label className="form-label">
            <input 
              name="e-mail" 
              type="e-mail" 
              className="form-input" 
              placeholder="E-mail"
            />
          </label>

          <label className="form-label">
            <input 
              name="password" 
              type="password" 
              className="form-input" 
              placeholder="Senha"
            />
          </label>

        </div>
        <span className="form-forget">Esqueceu a senha?</span>
        
        <button className="form-input-btn" type="submit">Login</button>

        <span className="form-not-account"> Não possui conta? <strong>Fale conosco</strong> </span>
      </form>

    </div>
  );
}

export default LoginPage;