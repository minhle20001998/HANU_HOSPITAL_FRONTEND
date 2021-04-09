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
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import AddPatientDialog from './AddPatientDialog'
import './Patient.css'

const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" }
        ],
    current: "Patients"
}

class Patient extends Component {

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
        return <div className="patient full">
            <BreadCrumbs data={data} />
            {
                isOpenDialogAdd && <AddPatientDialog
                    open={isOpenDialogAdd}
                    handleToggleDialogAdd={this.handleToggleDialogAdd}
                    addNewReport={this.addNewReport}
                />
            }
            <div className="add-area">
                <button className="report" onClick={this.handleToggleDialogAdd}><span>Add</span> <AddIcon /></button>
            </div>
            <section id="patient-section" className="main-section">
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
                                <TableCell align="left">DOB</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">Number</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  */}
                            <TableRow>
                                <TableCell align="left">1</TableCell>
                                <TableCell align="left">
                                    <Link to="/patient-profile" className="user-link">Le Tuan Minh</Link>
                                </TableCell>
                                <TableCell align="left">24-09-200</TableCell>
                                <TableCell align="left">108 Cu Chinh Lan</TableCell>
                                <TableCell align="left">096479454</TableCell>
                                <TableCell align="left">
                                    <Button color="primary" size="small">
                                        <EditIcon fontSize="small" className="edit-button"></EditIcon>
                                    </Button>
                                    <Button color="secondary" size="small">
                                        <DeleteIcon fontSize="small" color="secondary"></DeleteIcon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            {/*  */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </div>
    }
}

export default Patient