import React, { Component } from 'react';
import './Navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Navbar extends Component {
    render() {
        return <nav className="main-nav">
            <div className="logo">
                <a href="*">
                    <i className="fas fa-hospital-symbol"></i>
                    <span>HANU HOSPITAL</span>
                </a>
            </div>
            <div className="actions">
                <a href="*">
                    <ExitToAppIcon color="secondary" />
                </a>
            </div>
        </nav>
    }
}

export default Navbar;