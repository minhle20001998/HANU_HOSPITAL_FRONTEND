import React, { Component } from 'react'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import './Appointment.css';
import AddDialog from './AddAppointmentDialog';
import { Link } from 'react-router-dom'

const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" }
        ],
    current: "Appointments"
}

class Appointment extends Component {

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

    componentDidMount(){
    }

    render() {
        const { isOpenDialogAdd } = this.state;
        return <div className="appointment full">
            <BreadCrumbs data={data} />
            {
                isOpenDialogAdd && <AddDialog
                    open={isOpenDialogAdd}
                    handleToggleDialogAdd={this.handleToggleDialogAdd}
                    addNewReport={this.addNewReport}
                />
            }
            <div className="add-area">
                <button className="report" onClick={this.handleToggleDialogAdd}><span>Add</span> <AddIcon /></button>
            </div>
            <section id="appointment-section" className="main-section">
                <TableContainer component={Paper}>
                    <div className="search-area">
                        <InputBase
                            className="seach-bar"
                            placeholder="Search Appointment"
                        />
                        <IconButton type="submit" className="search-button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Patient Name</TableCell>
                                <TableCell align="left">Date & Time</TableCell>
                                <TableCell align="left">Service</TableCell>
                                <TableCell align="left">Doctor</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  */}
                            <TableRow>
                                <TableCell align="left">1</TableCell>
                                <TableCell align="left">Le Tuan Minh</TableCell>
                                <TableCell align="left">
                                    <p style={{ marginBottom: "10px" }}>13 June 2019</p>
                                    <p>7:12PM to 8:30PM</p>
                                </TableCell>
                                <TableCell align="left">Dental Checkup</TableCell>
                                <TableCell align="left">Dr.Jimmy</TableCell>
                                <TableCell align="left">
                                    <Link to="patient-profile">
                                        <Button variant="outlined" color="primary" size="small" >

                                            <RemoveRedEyeIcon></RemoveRedEyeIcon>
                                        </Button>
                                    </Link>
                                    <Button variant="outlined" color="secondary" size="small">
                                        <VisibilityOffIcon></VisibilityOffIcon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            {/*  */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </div >
    }
}

export default Appointment;