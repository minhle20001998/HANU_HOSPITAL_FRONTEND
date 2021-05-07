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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import DeleteIcon from '@material-ui/icons/Delete';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import { Link } from 'react-router-dom';
const data = {
    active:
        [
            { title: "Dashboard", link: "dashboard" }
        ],
    current: "Department"
}

class Department extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: [
                { name: "Heart", doctors: [{ name: "doctor who" }, { name: "doctor where" }, { name: "doctor where" }, { name: "doctor where" }] },
                { name: "Lungs", doctors: [{ name: "doctor who" }, { name: "doctor where" }] },
            ],
            headCells: [
                { id: 'name', label: 'Department Name', sortable: true },
                { id: 'doctors', label: 'Doctors' },
                { id: 'action', label: 'Actions' },
            ],
            page: 0,
            rowsPerPage: 5,
            orderBy: 'name',
            orderDirection: 'asc',
        }
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: 0,
            rowsPerPage: parseInt(event.target.value, 10)
        })
    };

    handleRequestSort = (event, property) => {
        const { orderBy, orderDirection } = this.state;
        const isAscending = (orderBy === property && orderDirection === 'asc');
        this.setState({
            orderBy: property,
            orderDirection: (isAscending) ? 'desc' : 'asc'
        })
    };

    createSortHandler = (property) => (event) => {
        this.handleRequestSort(event, property)
    };

    descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => this.descendingComparator(a, b, orderBy)
            : (a, b) => -this.descendingComparator(a, b, orderBy)
    }

    sortDepartment = (patient, comparator) => {
        const stabilizedRowArray = patient.map((el, index) => [el, index])
        stabilizedRowArray.sort((a, b) => {
            const order = comparator(a[0], b[0])
            if (order !== 0) return order
            return a[1] - b[1]
        })
        return stabilizedRowArray.map((el) => el[0])
    }


    render() {
        const { isOpenDialogAdd, isOpenDialogEdit, departments, currentPatient,
            orderBy, orderDirection, headCells, page, rowsPerPage, } = this.state;
        return <div className="department full">
            <BreadCrumbs data={data} />
            <div className="add-area">
                <button className="report" onClick={this.handleToggleDialogAdd}><span>Add</span> <AddIcon /></button>
            </div>
            <section id="department-section" className="main-section">
                <TableContainer component={Paper}>
                    <div className="search-area">
                        <InputBase
                            className="seach-bar"
                            placeholder="Search Department"
                        />
                        <IconButton type="submit" className="search-button" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => {
                                    return <TableCell key={headCell.id}>
                                        {(headCell.sortable)
                                            ? <TableSortLabel
                                                active={orderBy === headCell.id}
                                                direction={orderBy === headCell.id ? orderDirection : 'asc'}
                                                onClick={this.createSortHandler(headCell.id)}
                                            >
                                                {headCell.label}
                                            </TableSortLabel>
                                            : headCell.label
                                        }
                                    </TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {departments && departments.length > 0 && this.sortDepartment(departments, this.getComparator(orderDirection, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((d) => <TableRow key={d.id}>
                                <TableCell align="left">{d.name}</TableCell>
                                <TableCell align="left">
                                    <span>({d.doctors.length}) </span>
                                    {d.doctors.map(doctor => {
                                        return <>

                                            <Link to={`/patient-profile/${doctor.id}`} className="user-link">{doctor.name}</Link>
                                            <span> , </span></>
                                    })}
                                </TableCell>
                                <TableCell align="left">
                                    <Button color="primary" size="small" >
                                        <PersonAddIcon fontSize="small" className="edit-button" onClick={() => { this.handleEditButton(d.id) }}></PersonAddIcon>
                                    </Button>
                                    <Button color="primary" size="small" >
                                        <PersonAddDisabledIcon fontSize="small" className="remove-button" onClick={() => { this.handleEditButton(d.id) }}></PersonAddDisabledIcon>
                                    </Button>
                                    <Button color="secondary" size="small" onClick={() => { window.confirm('Do you want to delete ?') && this.deletePatient(d.id) }}>
                                        <DeleteIcon fontSize="small" color="secondary"></DeleteIcon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </div>
    }
}

export default Department