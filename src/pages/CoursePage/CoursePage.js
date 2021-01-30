import React from 'react';

import './CoursePage.css'

// import { Container } from './styles';

const CoursePage = () => {
  return (
      <div className="CoursePage">
        <div className="nav-bar">
            <a> &lt;- </a>
            <a> + </a>
        </div>

        <div className="div-course">
            <p>Sistemas de informaçoes</p>
            <div className="course-data">
              <span>8 Periodos</span>
              <span>Noturno</span>
            </div>
        </div>

        <div className="div-periods">
            <div className="period">
                <span>1° Periodo</span>
                <button> &gt; </button>
            </div>
        </div>

      </div>
  );
}

export default CoursePage;