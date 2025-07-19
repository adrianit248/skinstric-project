import React from "react";
import { Link } from "react-router-dom";


const Summary = () => {
  return (
    <div className="outer-div">
      <div className="intro-header-section">
        <div className="intro-header-section-namestate">
          <Link to="/" className="intro-header-section-name">
            sKINsTRIC
          </Link>
          <p className="intro-header-section-state">{`[ INTRO ]`}</p>
        </div>
        <button className="black-button">ENTER CODE</button>
      </div>

      <div className="summary-body">
        <main className="inner-main">
          <div className="summary-container">
            <div className="summary-header-holder">
              <h2 className="ai-analysis-summary">A.I. ANALYSIS</h2>
              <h3 className="demographic-summary-text">DEMOGRPAHICS</h3>
              <h4 className="predicted-age-race-text">PREDICTED RACE & AGE</h4>
            </div>

            <div className="summary-body-holder">
              <div className="left-stats-grid">
                <div className="left-top-block">
                  <p className="top-left-p">White</p>
                  <h4 className="top-left-h4">RACE</h4>
                </div>
                <div className="middle-left-block">
                  <p className="middle-left-p">0-2</p>
                  <h4 className="middle-left-h4">AGE</h4>
                </div>
                <div className="bottom-left-block">
                  <p className="middle-left-p">MALE</p>
                  <h4 className="middle-left-h4">sEX</h4>
                </div>
              </div>

              <div className="middle-stats-grid">
                <p className="middle-title">White</p>
                <div className="pie-container">
                  
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Summary;
