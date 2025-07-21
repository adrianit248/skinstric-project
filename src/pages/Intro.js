import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);

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

      <div className="body-container">
        <div className="center-box">
          {/* sub 1024 section */}
          <div className="little-boxholder-1">
            <div className="box-rotated-350"></div>
          </div>
          <div className="little-boxholder-2">
            <div className="box-rotated-420"></div>
          </div>
          {/* end sub 1024 section */}

          <div className="main-heading">
            {/* <h1 className='heading-text'>Sophisticated<br/><span className='heading-text-2'>skincare</span></h1> */}
            <h1
              className={`heading-text fadeInUp-animation
               ${isHovered ? "translate-left" : ""} 
               ${isDiscoverHovered ? "translate-right" : ""}`}
            >
              Sophisticated
              <br />
              <span className="heading-text-2">skincare</span>
            </h1>
          </div>

          {/* sub 1024 section */}
          <p className="little-blurb">
            Skinstric developed an A.I. that creates a highly-personalized
            routine tailored to what your skin needs.
          </p>
          <div className="enter-experience-link-holder">
            <Link to="/testing">
              <button className="enter-experience-link-button">
                <span className="enter-experience-link-text">
                  ENTER EXPERIENCE
                </span>
                <div className="enter-experience-link-diamond">
                  <MdPlayArrow className="arrow-icon" />
                </div>
              </button>
            </Link>
          </div>
          {/* end sub 1024 section */}

          <div className="blurb-holder">
            <p>
              SKINSTRIC DEVELOPED AN A.I. THAT CREATES A<br />
              HIGHLY-PERSONALIZED ROUTINE TAILORED TO
              <br />
              WHAT YOUR SKIN NEEDS.
            </p>
          </div>

          {/* <div className='left-section'> */}
          <div className={`left-section ${isHovered ? "fade-out" : ""}`}>
            <div className="left-section-holder">
              <div
                className={`left-section-diamond ${
                  isHovered ? "fade-out" : ""
                }`}
              ></div>
              <button
                className={`discover-button ${isHovered ? "fade-out" : ""}`}
                onMouseEnter={() => setIsDiscoverHovered(true)}
                onMouseLeave={() => setIsDiscoverHovered(false)}
              >
                <div className="button-diamond">
                  <MdPlayArrow className="arrow-icon discover-arrow" />
                </div>
                <span className="discover-ai">DISCOVER A.I.</span>
              </button>
            </div>
          </div>

          <div
            className={`right-section ${isDiscoverHovered ? "fade-out" : ""}`}
          >
            <div className="right-section-holder">
              <div
                className={`right-section-diamond ${
                  isDiscoverHovered ? "fade-out" : ""
                }`}
              ></div>
              <Link to="/testing">
                <button
                  className={`take-test-button ${
                    isDiscoverHovered ? "fade-out" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  TAKE TEST
                  <div className="button-diamond">
                    <MdPlayArrow className="arrow-icon" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
