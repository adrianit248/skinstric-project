import React from 'react'
import { Link } from 'react-router-dom'
import CameraIcon from '../camera-icon.webp'
import CameraScanLine from '../ResScanLine.webp'
import GalleryIcon from '../gallery-icon.webp'
import GalleryScanLine from '../ResGalleryLine.webp'
import { MdPlayArrow } from "react-icons/md"


const Result = () => {
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
                    <div className='analysis-diamond-large'></div>
                    <div className='analysis-diamond-medium'></div>
                    <div className='analysis-diamond-small'></div>

                    <div className='camera-section-holder'>
                        <img src={CameraIcon} className="camera-icon"/>
                        <div className='camera-aside-holder'>
                            <p className='allow-ai-text'>ALLOW A.I.<br/>TO SCAN YOUR FACE</p>
                            <img src={CameraScanLine} className='camera-scan-line'></img>
                        </div>
                    </div>
                </div>

                <div className='access-gallery-side-container'>
                    <div className='intermediary-div'></div>
                    <div className='analysis-diamond-large'></div>
                    <div className='analysis-diamond-medium'></div>
                    <div className='analysis-diamond-small'></div>

                    <div className='gallery-section-holder'>
                        <img src={GalleryIcon} className="gallery-icon"/>
                        <div className='gallery-aside-holder'>
                            <p className='allow-ai-gallery-text'>ALLOW A.I.<br/>ACCESS GALLERY</p>
                            <img src={GalleryScanLine} className='gallery-scan-line'></img>
                        </div>
                    </div>
                </div>

                <div className='preview-section-holder'>
                    <h1 className='preview-header'></h1>
                    <div className='preview-box'></div>
                </div>

                <input accept="image/*" class="hidden" type="file"></input>

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

                        <a href="/select"><div class="hidden"><div><div class=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden"><span class="rotate-[-45deg] text-xs font-semibold sm:hidden">PROCEED</span></div><div class="group hidden sm:flex flex-row relative justify-center items-center"><span class="text-sm font-semibold hidden sm:block mr-5">PROCEED</span><div class=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div><span class="absolute right-[15px] bottom-[13px] scale-[0.9] hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span></div></div></div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Result


                    