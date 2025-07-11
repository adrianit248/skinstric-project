import React from 'react'
import { MdPlayArrow } from "react-icons/md"


const Intro = () => {
  return (
    <div>
        <div className='main-container'>
            <div className='skinstric-header'>
                <div className='skinstric-namestate'>
                    <div className='skinstric-name'>sKINsTRIC</div>
                    <div className='skinstric-state'>{'[ INTRO ]'}</div>
                </div>
                <div className='header-button'>
                    <button className='black-button'>ENTER CODE</button>
                </div>
            </div>
            <div className='skinstric-body'>
                <div className='left-holder'>
                    <div className='left-message-holder'>
                        <div className='discover-ai-button discover-ai-button-left'>
                            <MdPlayArrow className='arrow-icon rotated-90' />
                        </div>
                        <div className='discover-ai-text-left'>DISCOVER A.I.</div>
                    </div>
                    <div className='intro-box left-side'>
                    </div>
                </div>
                <div className='right-holder'>
                    <div className='right-message-holder'>
                        <div className='discover-ai-text-right'>TAKE TEST</div>
                        <div className='discover-ai-button discover-ai-button-right'>
                            <MdPlayArrow className='arrow-icon rotated-none' />
                        </div>
                    </div>
                    <div className='intro-box right-side'></div>
                </div>
                <div className='middle-header'>
                    <div className='middle-header-top'>Sophisticated</div>
                    <div className='middle-header-bottom'>skincare</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro