import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
import React, { useState } from "react";

const Select = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div>
      <div className="intro-header-section">
        <div className="intro-header-section-namestate">
          <Link to="/" className="intro-header-section-name">
            sKINsTRIC
          </Link>
          <p className="intro-header-section-state">{`[ INTRO ]`}</p>
        </div>
        <button className="black-button">ENTER CODE</button>
      </div>

      <div>
        <div className="select-analysis-header-holder">
          <h1 className="select-analysis-header">A.I. ANALYSIS</h1>
          <p className="select-analysis-para">
            A.I. HAS ESTIMATED THE FOLLOWING.
            <br />
            FIX ESTIMATED INFORMATION IF NEEDED.
          </p>
        </div>

        <div className="select-body-holder">
          <div className="select-boxes-holder">
            {/* various fading diamonds */}
            <div
              className={`cosmetic-dotbox ${
                hoveredBox === "cosmetic" ? "active-dot" : ""
              }`}
            ></div>
            <div
              className={`demographics-dotbox ${
                hoveredBox === "demographics" ? "active-dot" : ""
              }`}
            ></div>
            <div
              className={`weather-dotbox ${
                hoveredBox === "weather" ? "active-dot" : ""
              }`}
            ></div>
            <div
              className={`skin-dotbox ${
                hoveredBox === "skin" ? "active-dot" : ""
              }`}
            ></div>


            <div className="square-holder">
              <div
              className="select-box-container cosmetic-box"
              onMouseEnter={() => setHoveredBox("cosmetic")}
              onMouseLeave={() => setHoveredBox(null)}
            >
                <div className="inner-box">
                  <p className="select-box-text">
                    COsMETIC
                    <br />
                    CONCERNs
                  </p>
                </div>
              </div>
              <div
              className="select-box-container demographics-box"
              onMouseEnter={() => setHoveredBox("demographics")}
              onMouseLeave={() => setHoveredBox(null)}
            >
                <Link to="/summary" className="inner-box inner-demo">
                  <p className="select-box-text">DEMOGRAPHICs</p>
                </Link>
              </div>
              <div
              className="select-box-container weather-box"
              onMouseEnter={() => setHoveredBox("weather")}
              onMouseLeave={() => setHoveredBox(null)}
            >
                <div className="inner-box">
                  <p className="select-box-text">WEATHER</p>
                </div>
              </div>
              <div
              className="select-box-container skin-box"
              onMouseEnter={() => setHoveredBox("skin")}
              onMouseLeave={() => setHoveredBox(null)}
            >
                <div className="inner-box">
                  <p className="select-box-text">sKIN TYPE DETAILs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="back-button-holder">
          <Link to="/result" className="back-button-holder-style">
            <div>
              <div className="back-diamond">
                <span className="back-text">BACK</span>
              </div>

              <div className="big-back-button">
                <div className="big-back-diamond">
                  <MdPlayArrow className="arrow-icon big-back-arrow" />
                </div>
                <span className="big-back-text">BACK</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="proceed-button-holder">
          <Link to="/summary" className="proceed-button-holder-style">
            <div>
              <div className="proceed-diamond">
                <span className="proceed-text">SUM</span>
              </div>

              <div className="big-proceed-button">
                <span className="big-proceed-text">GET SUMMARY</span>
                <div className="big-proceed-diamond">
                  <MdPlayArrow className="arrow-icon big-proceed-arrow" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Select;
