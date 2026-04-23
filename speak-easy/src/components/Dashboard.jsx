import React from 'react';
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-menu">
        <section className="logo">
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="dashboard-audio-logo">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </div>
          <h2>SpeakEasy</h2>
        </section>

        <section className="profile">
          <section className='profile-avatar'>M</section>
          <p>Monia</p>
        </section>

        <section className='menu'>
          <p>MENU</p>
          <p>Dashboard</p>
          <p>Mock Interview</p>
          <p>Tongue Twisters</p>
          <p>Pronunciation</p>
          <p>Progress</p>
          <p>Upcoming</p>
        </section>

        <section className='Logout'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="logout-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          <span>Logout</span>
        </section>
      </div>

      <div className="page-dashboard">
      </div>
    </div>
  );
};

export default Dashboard;