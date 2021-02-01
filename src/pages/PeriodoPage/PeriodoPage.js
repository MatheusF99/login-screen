import React from 'react';

// import { Container } from './styles';

const PeriodoPage =() => {
    return (
        <div className="periodopage">
            <div className="nav-bar">
                <a> &lt;- </a>
            </div>

            <div className="div-periods">
                <div className="period">
                    <span>1° Periodo</span>
                </div>
                <button> &gt; </button>
            </div>

            <p>Segunda-feira</p>


            <div className="div-course">
                <div className="course-data">
                    <span>Calculo</span>
                    <span>19:00</span>
                </div>
                <div className="course-data">
                    <span>Arivaldo</span>
                    <span>20:40</span>
                </div>
            </div>
            <div className="div-course">
                <div className="course-data">
                    <span>Algotimos</span>
                    <span>20:50</span>
                </div>
                <div className="course-data">
                    <span>Arivaldo</span>
                    <span>22:00</span>
                </div>
            </div>

            <p>Terça-feira</p>


            <div className="div-course">
                <div className="course-data">
                    <span>Calculo</span>
                    <span>19:00</span>
                </div>
                <div className="course-data">
                    <span>Arivaldo</span>
                    <span>20:40</span>
                </div>
            </div>
            <div className="div-course">
                <div className="course-data">
                    <span>Algotimos</span>
                    <span>20:50</span>
                </div>
                <div className="course-data">
                    <span>Arivaldo</span>
                    <span>22:00</span>
                </div>
            </div>
        </div>
    )
}

export default PeriodoPage;