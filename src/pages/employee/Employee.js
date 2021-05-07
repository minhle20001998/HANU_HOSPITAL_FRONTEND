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
import { Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { getDoctors, getReps } from '../../utils/api';
const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" }
        ],
    current: "Employee"
}


class Employee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctors: null,
            reps: null
        }
    }

    componentDidMount() {
        this.getAllDoctors();
        this.getAllReps();
    }

    getAllDoctors = async () => {
        const doctors = await getDoctors();
        this.setState({
            doctors: doctors
        })
    }

    getAllReps = async () => {
        const reps = await getReps();
        this.setState({
            reps: reps
        })
    }



    render() {
        const { doctors, reps } = this.state;
        return <div className="employee full">
            <BreadCrumbs data={data} />
            <div className="add-area">
                <button className="report" onClick={this.handleToggleDialogAdd}><span>Add</span> <AddIcon /></button>
            </div>
            <section id="employee-section" className="main-section">
                <TableContainer component={Paper}>
                    <div className="search-area">
                        <InputBase
                            className="seach-bar"
                            placeholder="Search Employee"
                        />
                        <IconButton type="submit" className="search-button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Employee Name</TableCell>
                                <TableCell align="left">Job</TableCell>
                                <TableCell align="left">Age</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Speciality</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*  */}
                            {doctors && doctors.map(d => {
                                return <TableRow>
                                    <TableCell align="left">{d.name}</TableCell>
                                    <TableCell align="left">Doctor</TableCell>
                                    <TableCell align="left">{d.age}</TableCell>
                                    <TableCell align="left">{d.phone}</TableCell>
                                    <TableCell align="left">{d.email}</TableCell>
                                    <TableCell align="left">{d.speciality}</TableCell>
                                </TableRow>
                            })}

                            {reps && reps.map(r => {
                                return <TableRow>
                                    <TableCell align="left">{r.name}</TableCell>
                                    <TableCell align="left">Receptionist</TableCell>
                                    <TableCell align="left">{r.age}</TableCell>
                                    <TableCell align="left">{r.phone}</TableCell>
                                    <TableCell align="left">{r.email}</TableCell>
                                    <TableCell align="left">None</TableCell>
                                </TableRow>
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </div>
    }
}

export default Employee;