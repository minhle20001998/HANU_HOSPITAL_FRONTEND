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
const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" }
        ],
    current: "Employee"
}

class Employee extends Component {
    render() {
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
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Employee Name</TableCell>
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
                                <TableCell align="left">
                                    <Link to="/employee-profile" className="user-link">Le Tuan Minh</Link>
                                </TableCell>
                                <TableCell align="left">
                                    <p style={{ marginBottom: "10px" }}>13 June 2019</p>
                                    <p>7:12PM to 8:30PM</p>
                                </TableCell>
                                <TableCell align="left">Dental Checkup</TableCell>
                                <TableCell align="left">Dr.Jimmy</TableCell>
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

export default Employee;