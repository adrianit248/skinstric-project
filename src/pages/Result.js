import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CameraIcon from '../camera-icon.webp';
import CameraScanLine from '../ResScanLine.webp';
import GalleryIcon from '../gallery-icon.webp';
import GalleryScanLine from '../ResGalleryLine.webp';
import { MdPlayArrow } from "react-icons/md";

const Result = () => {
  const [steps, setSteps] = useState(1);
  const [previewImage, setPreviewImage] = useState(null); // Starts as null on load
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [photouploaded, setPhotoUploaded] = useState(false);

  const handleButtonClick = () => {
    navigate('/loading');
  };

  const handleGalleryClick = () => {
    fileInputRef.current.click(); // Triggers hidden file input
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      // Display preview
      setPreviewImage(base64Image);

      // Save to localStorage
      localStorage.setItem('userImage', base64Image);

      // Prepare and send to API
      const payload = { image: base64Image };
      try {
        const response = await fetch('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

       const responseData = await response.json();
            console.log("API response:", responseData);

            // Store the result in localStorage
            localStorage.setItem("phaseTwoData", JSON.stringify(responseData)); // Store API result
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    reader.readAsDataURL(file); // Convert image to Base64
    setPhotoUploaded(true)
  };

  return (
    <div>
      <div className='intro-header-section'>
        <div className='intro-header-section-namestate'>
          <Link to="/" className='intro-header-section-name'>sKINsTRIC</Link>
          <p className='intro-header-section-state'>{`[ INTRO ]`}</p>
        </div>
        <button className='black-button'>ENTER CODE</button>
      </div>

      <div className='result-body'>
        <div className='result-header-holder'>
          <p className='start-analysis-header'>TO START ANALYSIS</p>
        </div>

        <div className='main-result-container'>
          <div className='scan-face-side-container'>
            <div className='intermediary-div'></div>
            <div className='analysis-diamond-large large-ani-1'></div>
            <div className='analysis-diamond-medium medium-ani-1'></div>
            <div className='analysis-diamond-small small-ani-1'></div>

            <div className='camera-section-holder'>
              <img src={CameraIcon} className="camera-icon" onClick={() => setSteps(2)} />
              <div className='camera-aside-holder'>
                <p className='allow-ai-text'>ALLOW A.I.<br />TO SCAN YOUR FACE</p>
                <img src={CameraScanLine} className='camera-scan-line' alt="Camera Scan" />
              </div>
            </div>

            {steps === 2 &&
              <div className='access-camera-holder'>
                <div className='access-camera-message-container'>
                  <h2 className='access-camera-message'>ALLOW A.I. TO ACCESS YOUR CAMERA</h2>
                  <div className='deny-allow-holder'>
                    <button className='deny-button' onClick={() => setSteps(1)}>DENY</button>
                    <button className='allow-button' onClick={handleButtonClick}>ALLOW</button>
                  </div>
                </div>
              </div>
            }
          </div>

          <div className='access-gallery-side-container'>
            <div className='intermediary-div'></div>
            <div className='analysis-diamond-large large-ani-1'></div>
            <div className='analysis-diamond-medium medium-ani-1'></div>
            <div className='analysis-diamond-small small-ani-1'></div>

            <div className='gallery-section-holder'>
              <img src={GalleryIcon} className="gallery-icon" onClick={handleGalleryClick} />
              <div className='gallery-aside-holder'>
                <p className='allow-ai-gallery-text'>ALLOW A.I.<br />ACCESS GALLERY</p>
                <img src={GalleryScanLine} className='gallery-scan-line' alt="Gallery Scan" />
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          <div className='preview-section-holder'>
            <h1 className='preview-header preview-darker'>Preview</h1>
            <div className='preview-box'>
              {previewImage && <img src={previewImage} alt="Preview" className='preview-img' />}
            </div>
          </div>

          <div className='result-bottom'>
            <div className='bottom-bar'>
              <Link to='/testing' className='relative-link'>
                <div>
                  <div className="back-diamond">
                    <span className="back-text">BACK</span>
                  </div>

                  <div className="big-back-button">
                    <div className="big-back-diamond">
                      <MdPlayArrow className='arrow-icon big-back-arrow' />
                    </div>
                    <span className="big-back-text">BACK</span>
                  </div>
                </div>
              </Link>

            {photouploaded 
                        &&  <div className={`proceed-button-holder ${photouploaded && 'fadeInRight-animation'}`}>
                                <Link to='/select' className="proceed-button-holder-style">
                                    <div>
                                        <div className="proceed-diamond">
                                            <span className="proceed-text">PROCEED</span>
                                        </div>
            
                                        <div className="big-proceed-button">
                                            <span className="big-proceed-text">PROCEED</span>
                                            <div className="big-proceed-diamond">
                                                <MdPlayArrow className='arrow-icon big-proceed-arrow' />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
