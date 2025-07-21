import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircleChart from '../components/CircleChart';
import { MdPlayArrow } from "react-icons/md";


const Summary = () => {
  const [phaseTwoData, setPhaseTwoData] = useState(null);
  const [phaseTwoRace, setPhaseTwoRace] = useState([]);
  const [phaseTwoAge, setPhaseTwoAge] = useState([]);
  const [phaseTwoSex, setPhaseTwoSex] = useState([]);

  const [specifierChosen, setSpecifierChosen] = useState('race')

  const [raceChosen, setRaceChosen] = useState('')
  const [ageChosen, setAgeChosen] = useState('')
  const [sexChosen, setSexChosen] = useState('')

  const [selectedConfidence, setSelectedConfidence] = useState(0); // default to 0%

  const [sumModal,setSumModal] = useState('race')

  const sortProperties = () => {
    
  }

  useEffect(() => {
    const stored = localStorage.getItem("phaseTwoData");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.success && parsed.data) {
          const { race, age, gender } = parsed.data;

          const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

          const formatAndSort = (obj) =>
          Object.entries(obj)
            .map(([label, confidence]) => ({
              label: capitalize(label),
              confidence,
            }))
            .sort((a, b) => b.confidence - a.confidence);

          const sortedRace = formatAndSort(race);
          const sortedAge = formatAndSort(age);
          const sortedGender = formatAndSort(gender);

          console.log("Sorted Race Data:", sortedRace);
          console.log("Sorted Age Data:", sortedAge);
          console.log("Sorted Gender Data:", sortedGender);  

          setPhaseTwoData(parsed);
          setPhaseTwoRace(sortedRace);
          setPhaseTwoAge(sortedAge);
          setPhaseTwoSex(sortedGender);

          setRaceChosen(sortedRace[0].label)
          setAgeChosen(sortedAge[0].label)
          setSexChosen(sortedGender[0].label)

          setSelectedConfidence(sortedRace[0]?.confidence || 0);
        }
      } catch (err) {
        console.error("Failed to parse phaseTwoData:", err);
      }
    }

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

      <div className="summary-body">
        <main className="inner-main">
          <div className="summary-container">
            <div className="summary-header-holder">
              <h2 className="ai-analysis-summary">A.I. ANALYSIS</h2>
              <h3 className="demographic-summary-text">DEMOGRPAHICS</h3>
              <h4 className="predicted-age-race-text">PREDICTED RACE & AGE</h4>
            </div>

            <div className="parent">
              <div className="div1">
                <div className={`left-box race-box ${specifierChosen === 'race' ? 'active' : ''}`} 
                onClick={() => {
                  setSpecifierChosen('race');
                  const match = phaseTwoRace.find(item => item.label === raceChosen);
                  setSelectedConfidence(match?.confidence || 0);
                }}>
                  <p className="left-dynamic-value">{raceChosen}</p>
                  <p className="left-value-class">RACE</p>
                </div>
              </div>
              <div className="div2">
                <div className={`left-box age-box ${specifierChosen === 'age' ? 'active' : ''}`} 
                onClick={() => {
                  setSpecifierChosen('age');
                  const match = phaseTwoAge.find(item => item.label === ageChosen);
                  setSelectedConfidence(match?.confidence || 0);
                }}>
                  <p className="left-dynamic-value">{ageChosen}</p>
                  <p className="left-value-class">AGE</p>
                </div>
              </div>
              <div className="div3">
                <div className={`left-box sex-box ${specifierChosen === 'sex' ? 'active' : ''}`} 
                onClick={() => {
                  setSpecifierChosen('sex');
                  const match = phaseTwoSex.find(item => item.label === sexChosen);
                  setSelectedConfidence(match?.confidence || 0);
                }}>
                  <p className="left-dynamic-value">{sexChosen}</p>
                  <p className="left-value-class">SEX</p>
                </div>
              </div>
              <div className="div4">
                <div className="middle-box">
                  <div className="hidden-message">If A.I. estimate is wrong, select the correct one.</div>
                  <div className="middle-box-top">
                    {specifierChosen === 'race'
                    &&  <div className="pie-header">{raceChosen}</div>
                    }
                    {specifierChosen === 'age'
                    &&  <div className="pie-header">{ageChosen}</div>
                    }
                    {specifierChosen === 'sex'
                    &&  <div className="pie-header">{sexChosen}</div>
                    }
                  </div>

                  <div className="middle-box-bottom">
                    {/* THIS IS WHERE THE DYNAMIC PIE GOES!!!!!!!!!!!!!!!!!!! */}
                    <div className="pie-holder">
                      <CircleChart percentage={Math.round((selectedConfidence || 0) * 100)} />
                    </div>
                    {/* THIS IS WHERE THE DYNAMIC PIE GOES!!!!!!!!!!!!!!!!!!! */}
                  </div>

                </div>
              </div>
              <div className="div5">
                <div className="right-box">
                  <div className="right-menu">
                    <p className="menu-prop">RACE</p>
                    <p className="menu-prop">A.I. CONFIDENCE</p>
                  </div>

                  {specifierChosen === 'race' 
                  && <>
                  {phaseTwoRace.map((elem, index) => (
                    <div className={`lineitem ${raceChosen === elem.label ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => {
                      setSelectedConfidence(elem.confidence);
                      setRaceChosen(elem.label);
                    }}>
                      <div className="lineitem-left">
                        <div className="lineitem-diamond"></div>
                        <div className="lineitem-label">{elem.label}</div>
                      </div>
                      <div className="lineitem-right">
                        <div className="lineitem-percentage">{(((elem.confidence) * 100).toFixed(2)) + '%'}</div>
                      </div>
                    </div>
                  ))}
                  </>
                  }

                  {specifierChosen === 'age' 
                  && <>
                  {phaseTwoAge.map((elem, index) => (
                    <div className={`lineitem ${ageChosen === elem.label ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => {
                      setSelectedConfidence(elem.confidence);
                      setAgeChosen(elem.label);
                    }}>
                      <div className="lineitem-left">
                        <div className="lineitem-diamond"></div>
                        <div className="lineitem-label">{elem.label}</div>
                      </div>
                      <div className="lineitem-right">
                        <div className="lineitem-percentage">{(((elem.confidence) * 100).toFixed(2)) + '%'}</div>
                      </div>
                    </div>
                  ))}
                  </>
                  }

                  {specifierChosen === 'sex' 
                  && <>
                  {phaseTwoSex.map((elem, index) => (
                    <div className={`lineitem ${sexChosen === elem.label ? 'active' : ''}`} 
                    key={index} 
                    onClick={() => {
                      setSelectedConfidence(elem.confidence);
                      setSexChosen(elem.label);
                    }}>
                      <div className="lineitem-left">
                        <div className="lineitem-diamond"></div>
                        <div className="lineitem-label">{elem.label}</div>
                      </div>
                      <div className="lineitem-right">
                        <div className="lineitem-percentage">{(((elem.confidence) * 100).toFixed(2)) + '%'}</div>
                      </div>
                    </div>
                  ))}
                  </>
                  }

                </div>
              </div>
          </div>
          </div>
        </main>
      </div>

      <div className="back-button-holder ">
        <Link to="/select" className="back-button-holder-style">
          <div>
            <div className="back-diamond sum-little">
              <span className="back-text">BACK</span>
            </div>

            <div className="big-back-button">
              <div className="big-back-diamond sum-little">
                <MdPlayArrow className="arrow-icon big-back-arrow" />
              </div>
              <span className="big-back-text sum-little btn-white">BACK</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="outer-hidden-message">If A.I. estimate is wrong, select the correct one.</div>

      <div className="proceed-button-holder">
        <Link to="/" className="proceed-button-holder-style">
          <div>
            <div className="proceed-diamond sum-little">
              <span className="proceed-text">HOME</span>
            </div>

            <div className="big-proceed-button">
              <span className="big-proceed-text sum-little btn-white">HOME</span>
              <div className="big-proceed-diamond sum-little">
                <MdPlayArrow className="arrow-icon big-proceed-arrow" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
