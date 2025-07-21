import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef, useEffect, useState } from "react";
import TakePicIcon from "../take-pic-icon.webp";
import { MdPlayArrow } from "react-icons/md";
import Loader from "../loading_gif.gif";

const Capture = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [baseImg, setBaseImg] = useState(null);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Camera error:", error);
      });
  };

  const changePhoto = () => {
    const canvas = photoRef.current;
    const context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Reset photo state
    setHasPhoto(false);
  };

  const usingPhoto = async () => {
    try {
      const storedImage = localStorage.getItem("userImage");

      if (!storedImage) {
        alert("No image found.");
        return;
      }

      const requestData = {
        image: storedImage,
      };

      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("API response:", responseData);

      // Store the result in localStorage
      localStorage.setItem("phaseTwoData", JSON.stringify(responseData));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Something went wrong while uploading the photo.");
    }

    setModal(true);

    setTimeout(() => {
      setModal(false);
      navigate("/select");
    }, 5000);
  };

  const takePhoto = () => {
  let video = videoRef.current;
  let photo = photoRef.current;

  const width = video.videoWidth;
  const height = video.videoHeight;

  photo.width = width;
  photo.height = height;

  const ctx = photo.getContext("2d");

  // Draw the current frame exactly as is
  ctx.drawImage(video, 0, 0, width, height);
  setHasPhoto(true);

  const dataURL = photo.toDataURL("image/png");
  localStorage.setItem("userImage", dataURL);
};


  useEffect(() => {
    getVideo();
  }, []);

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

      <div className="vid1">
        <div className="vid2">
          <div className="vid3">
            <video
              id="webcamVideo"
              autoPlay
              playsInline
              ref={videoRef}
              style={{ display: hasPhoto ? "none" : "block" }}
            ></video>

            {!hasPhoto && (
              <div className="take-picture-holder">
                <div className="take-picture-text">TAKE PICTURE</div>
                <div className="take-pic-icon-holder">
                  <img
                    src={TakePicIcon}
                    className="take-pic-icon"
                    onClick={takePhoto}
                  />
                </div>
              </div>
            )}

            <div className={`result ${hasPhoto ? "hasPhoto" : ""}`}>
              <canvas
                // style={{ width: "100%" }}
                ref={photoRef}
              ></canvas>
            </div>

            {hasPhoto && <div className="great-shot">GREAT SHOT!</div>}

            {!hasPhoto && (
              <div className="cam-messages-holder">
                <p className="better-results-text">
                  TO GET BETTER RESULTS MAKE SURE TO HAVE
                </p>
                <div className="points-holder">
                  <p>◇ NEUTRAL EXPRESSION</p>
                  <p className="middle-point">◇ FRONTAL POSE</p>
                  <p>◇ ADEQUATE LIGHTING</p>
                </div>
              </div>
            )}

            {hasPhoto && (
              <div className="preview-holder">
                <h2 className="preview-header">Preview</h2>
                <div className="preview-options">
                  <button className="retake-button" onClick={changePhoto}>
                    Retake
                  </button>
                  <button className="use-photo-button" onClick={usingPhoto}>
                    Use This Photo
                  </button>
                </div>
              </div>
            )}

            {modal && (
              <div className="modal-holder">
                <div className="modal-header">Analyzing...</div>
                <img src={Loader} className="modal-loader" alt="loading" />
              </div>
            )}
          </div>

          <div className="back-button-holder">
            <Link to="/result" className="back-button-holder-style">
              <div>
                <div className="back-diamond white-frame">
                  <span className="back-text white-one">BACK</span>
                </div>

                <div className="big-back-button white-hover">
                  <div className="big-back-diamond white-frame">
                    <MdPlayArrow className="arrow-icon big-back-arrow white-one" />
                  </div>
                  <span className="big-back-text white-one">BACK</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capture;