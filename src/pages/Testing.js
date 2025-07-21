import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md"
import Loader from '../loading_gif.gif'


const Testing = () => {

    const [data, setData] = useState({name: '', location: ''})
    const [step, setStep] = useState(1)
    const [userName, setUserName] = useState('')
    const [userCity, setUserCity] = useState('')
    const [error, setError] = useState('')
    const [redText, setRedText] = useState(false)
    const [resulting, setResulting] = useState({})
    const [showBtn, setShowBtn] = useState(false)

    const addName = (userName) => {
        const regex = /^[A-Za-z\s]*$/;

        if (regex.test(userName)) {
            setData({...data, name: userName})
            setRedText(false)
            setStep(2)
        } else {
            alert('Please enter a valid name without numbers or special characters')
        }
    }

    const addCity = (userCity) => {
        const regex = /^[A-Za-z\s]*$/;

        if (regex.test(userCity)) {
            const updatedData = { ...data, location: userCity };
            setData(updatedData)
            setRedText(false)
            setStep(3)

            saveAndUploadData(updatedData);
        } else {
            alert('Please enter a valid name without numbers or special characters')
        }

        setTimeout(() => {
            setStep(4)
        }, 2000);
        setShowBtn(true)
    }

    const saveAndUploadData = async (userData) => {
    try {
        // 1. Save to localStorage
        localStorage.setItem("userInfo", JSON.stringify(userData));

        // 2. Upload to API
        const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        });

        // 3. Read and log the response
        const result = await response.json();
        console.log("API response:", result);
        setResulting(result)
    } catch (error) {
        console.error("Error uploading data:", error);
    }
    };


    useEffect(() => {
        console.log(data)
    }, [data])

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
                {step === 1 && <p className="testing-intro-clicktotype">CLICK TO TYPE</p>}
                {step === 2 && <p className="testing-intro-clicktotype">CLICK TO TYPE</p>}
                <form className="testing-form">
                    <div className="column-item-centered">
                    </div>

                    {redText && <p className="red-text">Please enter a valid name without numbers or special characters</p>}

                    {step === 1 && <input autoFocus onChange={(event) => setUserName(event.target.value)} 
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                addName(userName);
                            }
                        }} 
                        className="testing-intro-input" placeholder="Introduce Yourself" autoComplete="off" type="text" name="name"></input>}
                    {step === 2 && <input autoFocus onChange={(event) => setUserCity(event.target.value)} 
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
                            <p className="proceed-message"><br/>{resulting.message}</p>
                        </>
                    }
                    
                    


                </form>
                <div className="diamond-large large-ani"></div>
                <div className="diamond-medium medium-ani"></div>
                <div className="diamond-small small-ani"></div>
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
            &&  <div className={`proceed-button-holder ${showBtn && 'fadeInRight-animation'}`}>
                    <Link to='/result' className="proceed-button-holder-style">
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
  );
};

export default Testing;