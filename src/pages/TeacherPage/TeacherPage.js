 import React from 'react';
 import './TeacherPage.css'
 // import { Container } from './styles';
 
 function TeacherPage() {
   return (
       <div className="periodo-page">
            <div className="nav-bar">
                <a> &lt;- </a>
            </div>

            <h1>Professor</h1>

            <h2 className="teacher-name">Pedriana Pavao</h2>

            <p>curso</p>
            <div className="div-periods">
                <div className="period">
                    <span>Sistemas de Informacao</span>
                </div>
                <button> &gt; </button>
            </div>

            <p>1° Periodo</p>

            <p className="week-day">Segunda-feira</p>


            <div className="div-course">
                <span className="course-name">Algotimos</span>
                <div className="course-data">
                    <span>20:50</span>
                    <span>22:00</span>
                </div>
            </div>

            <p className="week-day">Terça-feira</p>

            <div className="div-course">
                <span className="course-name">Algotimos</span>
                <div className="course-data">
                    <span>20:50</span>
                    <span>22:00</span>
                </div>
            </div>
        </div>
   );
 }
 
 export default TeacherPage;