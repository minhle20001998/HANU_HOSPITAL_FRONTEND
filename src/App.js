import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import PatientProfile from './pages/patient-profile/PatientProfile'
import Appointment from './pages/appointments/Appointment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
class App extends Component {
  render() {
    return <div className="app">
      <Router>
        <Navbar />
        <section id="main-section">
          <Sidebar />
          <Switch>
            <Route path="/appointments">
              <Appointment />
            </Route>
            <Route path="/patients">
              <PatientProfile />
            </Route>
            <Route path="/patient-profile">
              <PatientProfile />
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  }
}

export default App;
