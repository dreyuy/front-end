import React from 'react';
import logo from './logo.svg';
import TreatmentForm from './components/TreatmentForm';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Register />
        {/* <Login />
        <PrivateRoute exact path='/protected' component={null}/> */}
        {/* <TreatmentForm />
        <Profile /> */}
      </div>
    </Router>
  );
}

export default App;
