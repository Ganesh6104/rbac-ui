import React, { useState } from 'react';
import './App.css';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="header">Admin Dashboard</h1>
      <div className="content-container">
        <UserManagement />
        <RoleManagement />
      </div>
    </div>
  );
};

export default App;
