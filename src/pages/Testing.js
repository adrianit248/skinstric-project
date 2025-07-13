import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md"
import Loader from '../loading_gif.gif'


const Testing = () => {

    const [data, setData] = useState({firstName: '', theCity: ''})
    const [step, setStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userCity, setUserCity] = useState('')

    const addName = (userName) => {
        setData(...data, firstName: userName)
        console.log(data)
        setStep(2)
    }

    const addCity = (userCity) => {
        setData(...data, theCity: userCity)
        console.log(data)
        setStep(3)

        setTimeout(() => {
            setStep(4)
        }, 2000);
    }

  return (
    <div>
      <div className='intro-header-section'>

            <div className='intro-header-section-namestate'>
                <Link to="/" className='intro-header-section-name'>sKINsTRIC</Link>
                <p className='intro-header-section-state'>{`[ INTRO ]`}</p>
            </div>
            <button className='black-button'>ENTER CODE</button>
        </div>

        <div className="testing-body">
            <div className="analysis-message">
                <p className="analysis-message-text">TO sTART ANALYsIs</p>
            </div>

            <div className="testing-intro-holder">
                {step === 1 || step === 2 && <p className="testing-intro-clicktotype">CLICK TO TYPE</p>}
                <form className="testing-form">
                    <div className="column-item-centered"></div>

                    {step === 1 && <input onChange={(event) => setUserName(event.target.value)} 
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                addName(userName);
                            }
                        }} 
                        className="testing-intro-input" placeholder="Introduce Yourself" autoComplete="off" type="text" name="name"></input>}
                    {step === 2 && <input onChange={(event) => setUserCity(event.target.value)} 
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                addCity(userCity);
                            }
                        }} 
                        className="testing-intro-input" placeholder="Your City Name" autoComplete="off" type="text" name="name"></input>}
                    {step === 3 
                    &&  <>
                            <p className="testing-intro-clicktotype">Processing submission</p>
                            <img src={Loader} className="loading-gif"/>
                        </>
                    }
                    {step === 4 
                    &&  <>
                            <p className="thank-you-message">Thank you!</p>
                            <p className="proceed-message">Proceed for the next step</p>
                        </>
                    }
                    
                    


                </form>
                <div className="diamond-large"></div>
                <div className="diamond-medium"></div>
                <div className="diamond-small"></div>
            </div>

            <div className="back-button-holder">
                <Link to='/' className="back-button-holder-style">
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
            </div>

            {step === 4 
            &&  <div className="proceed-button-holder">
                    <Link to='/result' className="proceed-button-holder-style">
                        <div>
                            <div className="proceed-diamond">
                                <span className="proceed-text">PROCEED</span>
                            </div>

                            <div className="big-proceed-button">
                                <div className="big-proceed-diamond">
                                    <MdPlayArrow className='arrow-icon big-proceed-arrow' />
                                </div>
                                <span className="big-proceed-text">PROCEED</span>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </div>
    </div>
  );
};

export default Testing;