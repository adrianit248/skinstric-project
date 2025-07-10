import React from 'react'

const Intro = () => {
  return (
    <div>
        <div className='main-container'>
            <div className='skinstric-header'>
                <div className='skinstric-namestate'>
                    <div className='skinstric-name'>Skinstric</div>
                    <div className='skinstric-state'>{'[ INTRO ]'}</div>
                </div>
                <div className='header-button'>
                    <button className='black-button'>ENTER CODE</button>
                </div>
            </div>
            <div className='skinstric-body'>
                <div className='left-holder'>
                    <div className='intro-box left-side'></div>
                </div>
                <div className='right-holder'>
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