import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
const menus = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "dashboard"
    },
    {
        title: "Appointments",
        icon: <CalendarTodayIcon />,
        link: "appointments"
    },
    {
        title: "Patients",
        icon: <PersonIcon />,
        link: "patients"
    }
]

const temp_url = "https://www.wrraptheme.com/templates/lucid/hospital/assets/images/user.png";

class Sidebar extends Component {

    render() {
        return <aside className="side-bar">
            <div className="user-account">
                <img src={temp_url} alt="doctor-img" />
                <div>
                    <p>Welcome ,</p>
                    <a href="user" className="doctor-anchor">Dr. Jimmy ngủyên</a>
                </div>
            </div>
            <Divider />
            <List>
                {menus.map((menu, index) => (
                    <ListItem button key={menu.title}>
                        <Link className="side-nav" to={menu.link}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.title} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </aside>
    }
}

export default Sidebar