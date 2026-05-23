import React from "react";
import "../styles/Upcoming.css";

const features = [
  {
    title: "AI Interview Questions",
    description: "Dynamic AI-generated questions based on role",
  },
  {
    title: "Grammar Correction",
    description: "Real-time sentence correction",
  },
  {
    title: "Confidence Score",
    description: "Analyze tone and confidence",
  },
  {
    title: "Daily Streak",
    description: "Track your consistency",
  },
  {
    title: "Dark Mode",
    description: "Switch themes for comfort",
  },
];

const UpcomingFeatures = () => {
  return (
    <div className="upcoming-page">
      <div className="upcoming-content">
        <div className="upcoming-intro">
          <span className="upcoming-badge">ROADMAP</span>
          <h1>Future Enhancements</h1>
          <p>These features are planned for upcoming versions.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-top">
                <h2>{feature.title}</h2>
                <span className="coming-soon">Coming Soon</span>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;