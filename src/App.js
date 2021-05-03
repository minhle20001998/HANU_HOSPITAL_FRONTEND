import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Patient from './pages/patient/Patient'
import PatientProfile from './pages/patient-profile/PatientProfile'
import Appointment from './pages/appointments/Appointment'
import Login from './pages/login/Login'
import Employee from './pages/employee/Employee'
import Equipment from './pages/equipment/Equipment'
import EmployeeProfile from './pages/employee-profile/EmployeeProfile'
import Medicine from './pages/medicine/Medicine'
import ProtectedRoute from './routes/ProtectedRoute'
import LoginRoute from './routes/LoginRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  componentDidMount() {

  }

  checkLogin() {
    
  }

  render() {
    const { isLogin } = this.state;
    return <div className="app">
      <Router>
        <Navbar />
        <section id="main-section">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/(|dashboard)/">
              <Sidebar />
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
            <Route path="/employee">
              <Employee />
              <Sidebar />
            </Route>
            <Route path="/equipment">
              <Sidebar />
              <Equipment />
            </Route>
            <Route path="/employee-profile">
              <Sidebar />
              <EmployeeProfile />
            </Route>
            <Route path="/medicine">
              <Sidebar />
              <Medicine />
            </Route>
          </Switch>
        </section>
      </Router>
    </div >
  }
}

export default App;
