import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CameraIcon from "../camera-icon.webp";
import LoadingBar from "../components/LoadingBar";

const LoadingCamera = () => {
    const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/camera/capture');
    }, 5000);
  }, []);

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

      <div className="result-body">
        <div className="main-result-container loading-main">
          <div className="scan-face-side-container loading-scan">
            <div className="intermediary-div"></div>
            <div className="analysis-diamond-large large-ani-1"></div>
            <div className="analysis-diamond-medium medium-ani-1"></div>
            <div className="analysis-diamond-small small-ani-1"></div>

            <div className="camera-section-holder">
              <img src={CameraIcon} className="camera-icon" />
              <div className="camera-aside-holder loading-aside">
                <p className="allow-ai-text">SETTING UP CAMERA...</p>
              </div>
            </div>

            <div className="cam-messages-holder loading-cam-messages black-one">
              <p className="better-results-text black-one">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="points-holder black-one">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p className="middle-point">◇ FRONTAL POSE</p>
                <p>◇ ADEQUATE LIGHTING</p>
              </div>
            </div>

            <LoadingBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCamera;
