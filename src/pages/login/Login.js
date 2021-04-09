import React, { Component } from 'react'
import loginImage from '../../images/doctor.jpg'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import Button from '@material-ui/core/Button';
const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            status: ""
        }
        this.fetchData = this.fetchData.bind(this);
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async fetchData(e) {
        const { username, password } = this.state
        const req = {
            username: username,
            password: password
        }
        try {
            const res = await axios.post('http://localhost:8090/login', req);
            if (res.data.isAuthen) {
                this.setState({
                    status: "correct"
                })
            } else {
                this.setState({
                    status: "wrong"
                })
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    usernameOnChange() {
        const username_input = document.querySelector("#username").value;
        this.setState({
            username: username_input
        })
    }

    passwordOnChange() {
        const password_input = document.querySelector("#password").value;
        this.setState({
            password: password_input
        })
    }

    async onSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state
        const req = {
            username: username,
            password: password
        }
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3030/login',
                data: { username: username, password: password },
                credentials: 'include'
            })
            console.log(response)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    render() {
        const { status } = this.state;
        return <div className="login">
            <form className="form">
                <Typography variant="h4" gutterBottom>
                    Login HANU+
                </Typography>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" id="green-text" >
                    Log In
                </Button>
            </form>
        </div>
    }
}

export default Login