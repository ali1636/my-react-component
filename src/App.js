import React from 'react';
import './App.css';
import UserData from './Components/UserData';
import Statistics from './Components/Statistics';
import Messages from './Components/Messages';

function App() {
  const user1 = {
    name: 'Zoha',
    email: 'ali@example.com',
    role: 'Admin',
    profilePicture:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPPTqKNCOqdhabYYZtcgfhz3WFkkYeZdzNw&s',
  };

  const user2 = {
    totalUsers: 1200,
    activeUsers: 700,
    newSignups: 300,
    activePercentage: 58,
  };

  const user3 = {
    message1: 'Your account has been successfully updated!',
    message2: 'You have new notifications!',
    message3: 'App is available!',
  };

  return (
    <div className="dashboard-container">
      <UserData user={user1} />
      <div className="card-container">
        <Statistics user={user2} />
        <Messages user={user3} />
      </div>
    </div>
  );
}

export default App;
