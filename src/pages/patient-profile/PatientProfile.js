import React, { Component } from 'react'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import AddDialog from './AddDialog';
import './PatientProfile.css';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TimeLine from '../../components/timeline/Timeline'
import userImage from '../../images/user.png';
import AddIcon from '@material-ui/icons/Add';
const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" },
            { title: "Patients", link: "patients" },
        ],
    current: "Patient-Profile"
}

class PatientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDialogAdd: false,
        }
        this.handleToggleDialogAdd = this.handleToggleDialogAdd.bind(this);

    }

    handleToggleDialogAdd() {
        this.setState((currentState) => ({
            isOpenDialogAdd: !currentState.isOpenDialogAdd
        }));
    }

    addNewReport(data) {
        console.log(data);
    }

    render() {
        const { isOpenDialogAdd } = this.state;
        return <div className="patient-profile full">
            <BreadCrumbs data={data} />
            {
                isOpenDialogAdd && <AddDialog
                    open={isOpenDialogAdd}
                    handleToggleDialogAdd={this.handleToggleDialogAdd}
                    addNewReport={this.addNewReport}
                />
            }
            <section id="patient-profile-section">
                <aside>
                    <div id="patient-info">
                        <img src={userImage} alt="user-avatar" />
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem >
                                <Typography variant="h5" color="Primary">
                                    Patient Name
                                </Typography>
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <Typography variant="h6" >
                                    Email
                                </Typography>
                                <Typography variant="p" >
                                    test@gmail.com
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h6" >
                                    Phone
                                </Typography>
                                <Typography variant="p" >
                                    0xxxxxxx
                                </Typography>
                            </ListItem>
                            <ListItem >
                                <Typography variant="h6" >
                                    Address
                                </Typography>
                                <Typography variant="p" >
                                    69 Paleto Bay, US
                                </Typography>
                            </ListItem>
                        </List>
                    </div>
                    <div id="general-report">
                        <Typography variant="h6" color="Primary">
                            General Report
                        </Typography>
                        <br />
                        <div>
                            <span style={{ fontSize: "17px", fontWeight: "bold" }}>Blood Type:	&nbsp;</span>
                            <span>C </span>
                        </div>
                        <div>
                            <span style={{ fontSize: "17px", fontWeight: "bold" }}>Height:	&nbsp;</span>
                            <span>180 cm </span>
                        </div>
                        <div>
                            <span style={{ fontSize: "17px", fontWeight: "bold" }}>Weight:	&nbsp;</span>
                            <span>80 kg </span>
                        </div>
                        <div>
                            <span style={{ fontSize: "17px", fontWeight: "bold" }}>Allergies:	&nbsp;</span>
                            <span>Peanut, Potato</span>
                        </div>
                    </div>
                </aside>
                <main>
                    <Typography variant="h6" color="Primary">
                        Activity
                    </Typography>
                    <button className="report" onClick={this.handleToggleDialogAdd}><span>Add</span> <AddIcon /></button>
                    <TimeLine />
                </main>
            </section>
        </div>
    }
}
export default PatientProfile;