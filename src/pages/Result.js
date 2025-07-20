import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CameraIcon from '../camera-icon.webp'
import CameraScanLine from '../ResScanLine.webp'
import GalleryIcon from '../gallery-icon.webp'
import GalleryScanLine from '../ResGalleryLine.webp'
import { MdPlayArrow } from "react-icons/md"
import { useNavigate } from 'react-router-dom';



const Result = () => {

    const [steps, setSteps] = useState(1)

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/camera/capture')
    }

    useEffect(() => {

    }, [])

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
                        <img src={CameraIcon} className="camera-icon" onClick={() => setSteps(2)}/>
                        <div className='camera-aside-holder'>
                            <p className='allow-ai-text'>ALLOW A.I.<br/>TO SCAN YOUR FACE</p>
                            <img src={CameraScanLine} className='camera-scan-line'></img>
                        </div>
                    </div>

                    {steps === 2 
                    &&  <div className='access-camera-holder'>
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
                        <img src={GalleryIcon} className="gallery-icon"/>
                        <div className='gallery-aside-holder'>
                            <p className='allow-ai-gallery-text'>ALLOW A.I.<br/>ACCESS GALLERY</p>
                            <img src={GalleryScanLine} className='gallery-scan-line'></img>
                        </div>
                    </div>
                </div>

                <div className='preview-section-holder'>
                    <h1 className='preview-header'>Preview</h1>
                    <div className='preview-box'></div>
                </div>

                {/* <input accept="image/*" class="hidden" type="file"></input> */}

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

                        <Link to='/select'>
                            <div className='hidden-div'>
                                <div>
                                    <div className='hidden-1'>
                                        <span className='hidden-2'>PROCEED</span>
                                    </div>

                                    <div className='hidden-3'>
                                        <span className='hidden-4'>PROCEED</span>
                                        <div className='hidden-5'></div>
                                        <span className='hidden-6'>▶</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result


                    