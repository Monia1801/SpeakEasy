import React from "react";
import "../styles/Progress.css";

const Progress = () => {
  const weeklyData = [
    { day: "Mon", value: 3 },
    { day: "Tue", value: 5 },
    { day: "Wed", value: 2 },
    { day: "Thu", value: 4 },
    { day: "Fri", value: 6 },
    { day: "Sat", value: 1 },
    { day: "Sun", value: 3 },
  ];

  const maxValue = 8;

  return (
    <div className="progress-page">
      <div className="progress-content">
        <div className="progress-intro">
          <span className="progress-badge">ANALYTICS</span>
          <h1>Your Progress</h1>
          <p>Watch your speaking skills grow week by week.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>78%</h2>
            <p>Accuracy</p>
          </div>

          <div className="stat-card">
            <h2>12</h2>
            <p>Total Sessions</p>
          </div>

          <div className="stat-card">
            <h2>45</h2>
            <p>Words Learned</p>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5h15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 19.5V9.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5V6.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 19.5v-4.5"
                />
              </svg>
            </div>
            <h3>Weekly Activity</h3>
          </div>

          <div className="chart-wrapper">
            <div className="y-axis">
              <span>8</span>
              <span>6</span>
              <span>4</span>
              <span>2</span>
              <span>0</span>
            </div>

            <div className="chart-area">
              <div className="grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="bars">
                {weeklyData.map((item) => (
                  <div className="bar-group" key={item.day}>
                    <div
                      className="bar"
                      style={{ height: `${(item.value / maxValue) * 100}%` }}
                    ></div>
                    <p>{item.day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;