import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { register } from '../../utils/api';
import { withRouter } from "react-router";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            phoneNumber: "",
            address: "",
            password: "",
            status: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleInput(type, e) {
        this.setState({
            [type]: e.target.value
        })
    }

    async handleOnSubmit(e) {
        e.preventDefault();
        const { name, username, phoneNumber, address, password } = this.state;
        const result = await register({ name, username, phoneNumber, address, password });
        if (result.success === true) {
            console.log("move")
            this.props.history.push('/login');
        }
    }


    render() {
        // const { status } = this.state;
        return <div className="login">
            <form className="form" onSubmit={this.handleOnSubmit}>
                <Typography variant="h4" gutterBottom>
                    Register HANU+
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" onInput={(e) => { this.handleInput("name", e) }} />
                <TextField id="outlined-basic" label="Username" variant="outlined" onInput={(e) => { this.handleInput("username", e) }} />
                <TextField id="outlined-basic" label="Phonenumber" variant="outlined" type="number" onInput={(e) => { this.handleInput("phoneNumber", e) }} />
                <TextField id="outlined-basic" label="Address" variant="outlined" onInput={(e) => { this.handleInput("address", e) }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onInput={(e) => { this.handleInput("password", e) }} />
                <Button variant="contained" id="green-text" type="submit" >
                    Sign In
                </Button>
                <div className="flex-center signup-link" style={{ marginTop: "40px" }}>
                    <Link to="login" >Login Here !</Link>
                </div>
            </form>

        </div>
    }
}

export default withRouter(Register);