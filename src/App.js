import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Patient from './pages/patient/Patient'
import PatientProfile from './pages/patient-profile/PatientProfile'
import Appointment from './pages/appointments/Appointment'
import Login from './pages/login/Login'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
class App extends Component {
  render() {
    return <div className="app">
      <Router>
        <Navbar />
        <section id="main-section">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/appointments">
              <Sidebar />
              <Appointment />
            </Route>
            <Route path="/patients">
              <Sidebar />
              <Patient />
            </Route>
            <Route path="/patient-profile">
              <Sidebar />
              <PatientProfile />
            </Route>
            <Route path="/users">
              <Sidebar />
            </Route>
            <Route path="/">
              <Sidebar />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  }
}

export default App;
