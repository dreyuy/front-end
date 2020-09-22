import React from 'react';
import logo from './logo.svg';
import TreatmentForm from './components/TreatmentForm';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <TreatmentForm />
      <Profile /> */}
    </div>
  );
}

export default App;
