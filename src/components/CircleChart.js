import React, { useEffect, useState } from "react";
import "./CircleChart.css";

const CircleChart = ({ percentage }) => {
  const [displayedPercent, setDisplayedPercent] = useState(0);

  useEffect(() => {
    const duration = 700;
    const steps = 30;
    const stepTime = duration / steps;
    const difference = percentage - displayedPercent;
    let current = displayedPercent;
    let step = difference / steps;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      current += step;
      setDisplayedPercent(Math.round(current));
      if (frame >= steps) {
        clearInterval(interval);
        setDisplayedPercent(percentage);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [percentage]);

  const radius = 45; // 45 out of 50, to keep stroke inside viewBox
  const circumference = 2 * Math.PI * radius;
  const progress = (displayedPercent / 100) * circumference;

  return (
    <svg
      className="circle-chart"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="rotate(-90 50 50)">
        <circle className="circle-bg" cx="50" cy="50" r={radius} />
        <circle
          className="circle-progress"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </g>
      <text
        x="50"
        y="50"
        className="circle-text"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {displayedPercent}%
      </text>
    </svg>
  );
};

export default CircleChart;
