import React from 'react';
import './PeriodoPage.css'
// import { Container } from './styles';

const PeriodoPage =() => {
    return (
        <div className="periodo-page">
            <div className="nav-bar">
                <a> &lt;- </a>
            </div>

            <h1>Aulas</h1>

            <div className="div-periods">
                <div className="period">
                    <span>1° Periodo</span>
                </div>
                <button> &gt; </button>
            </div>

            <p className="week-day">Segunda-feira</p>


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

            <p className="week-day">Terça-feira</p>


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