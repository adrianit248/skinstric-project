import React from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md"


const Select = () => {
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

      <div>
        <div className="select-analysis-header-holder">
          <h1 className="select-analysis-header">A.I. ANALYSIS</h1>
          <p className="select-analysis-para">
            A.I. HAS ESTIMATED THE FOLLOWING.
            <br />
            FIX ESTIMATED INFORMATION IF NEEDED.
          </p>
        </div>

        <div className="select-body-holder">
            <div className="select-boxes-holder">
                <div className="square-holder">
                    <div className="select-box-container">
                        <div className="inner-box">
                            <p className="select-box-text">COsMETIC<br/>CONCERNs</p>
                        </div>
                    </div>
                    <div className="select-box-container">
                        <Link to='/summary' className="inner-box">
                            <p className="select-box-text">DEMOGRAPHICs</p>
                        </Link>
                    </div>
                    <div className="select-box-container">
                        <div className="inner-box">
                            <p className="select-box-text">WEATHER</p>
                        </div>
                    </div>
                    <div className="select-box-container">
                        <div className="inner-box">
                            <p className="select-box-text">sKIN TYPE DETAILs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="back-button-holder">
            <Link to='/result' className="back-button-holder-style">
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

        <div className="proceed-button-holder">
            <Link to='/summary' className="proceed-button-holder-style">
                <div>
                    <div className="proceed-diamond">
                        <span className="proceed-text">SUM</span>
                    </div>

                    <div className="big-proceed-button">
                        <div className="big-proceed-diamond">
                            <MdPlayArrow className='arrow-icon big-proceed-arrow' />
                        </div>
                        <span className="big-proceed-text">GET SUMMARY</span>
                    </div>
                </div>
            </Link>
        </div>


        {/* <div className="select-body">
          <div className="relative-select-box">
            <div className="small-holder-holder">
              <div className="small-holder">
                <div className="select-small-diamond"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                <img
                  alt="Diamond Medium"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  sizes="100vw"
                  srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=3840&amp;q=75 3840w"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-medium-medium.7599ea96.png&amp;w=3840&amp;q=75"
                  style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute transition-all duration-400 w-[400px] h-[400px] opacity-0">
                <img
                  alt="Diamond Large"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  sizes="100vw"
                  srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=3840&amp;q=75 3840w"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiamond-dark-small.c887a101.png&amp;w=3840&amp;q=75"
                  style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                />
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-0">
              <div className="flex items-center justify-center col-start-2">
                <a href="/summary">
                  <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300">
                    <span className="transform -rotate-45">Demographics</span>
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center row-start-2 col-start-1">
                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                  <span className="transform -rotate-45">
                    Cosmetic Concerns
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-center row-start-2 col-start-3">
                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                  <span className="transform -rotate-45">
                    Skin Type Details
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-center row-start-3 col-start-2">
                <button className="w-[153.88px] h-[153.88px] bg-gray-100 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 font-semibold leading-[24px] tracking-tight uppercase cursor-not-allowed">
                  <span className="transform -rotate-45">Weather</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Select;
