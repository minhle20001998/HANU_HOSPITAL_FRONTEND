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
import Register from './pages/register/Register'
import ProtectedRoute from './routes/ProtectedRoute'
import LoginRoute from './routes/LoginRoute'
import Department from './pages/department/Department'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
    this.setUser = this.setUser.bind(this);
  }

  setUser(user, callback) {
    this.setState({ user: user }, callback);
  }

  render() {
    return <div className="app">
      <Router>
        <Navbar />
        <section id="main-section">
          <Switch>
            <LoginRoute exact path="/login">
              <Login setUser={this.setUser} />
            </LoginRoute>
            <Route path="/signup">
              <Register />
            </Route>
            <ProtectedRoute exact path="/(|dashboard)/">
              <Sidebar />
            </ProtectedRoute>
            <ProtectedRoute exact path="/appointments">
              <Sidebar />
              <Appointment />
            </ProtectedRoute>
            <ProtectedRoute exact path="/patients">
              <Sidebar />
              <Patient />
            </ProtectedRoute>
            <ProtectedRoute exact path="/patient-profile/:id">
              <Sidebar />
              <PatientProfile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/users">
              <Sidebar />
            </ProtectedRoute>
            <ProtectedRoute exact path="/employee">
              <Employee />
              <Sidebar />
            </ProtectedRoute>
            <ProtectedRoute exact path="/equipment">
              <Sidebar />
              <Equipment />
            </ProtectedRoute>
            <ProtectedRoute exact path="/employee-profile">
              <Sidebar />
              <EmployeeProfile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/medicine">
              <Sidebar />
              <Medicine />
            </ProtectedRoute>
            <ProtectedRoute exact path="/department">
              <Sidebar />
              <Department />
            </ProtectedRoute>
          </Switch>
        </section>
      </Router>
    </div >
  }
}

export default App;
