import React, { useEffect, useState } from "react";
import "./LoadingBar.css";

const LoadingBar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="loading-bar-container">
      <div className={`loading-bar-fill ${animate ? "animate" : ""}`}></div>
    </div>
  );
};

export default LoadingBar;
