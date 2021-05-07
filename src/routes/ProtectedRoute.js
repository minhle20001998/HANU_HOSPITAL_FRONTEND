import React, { Component } from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom';
import { checkStillLogin } from '../utils/utils'
class ProtectedRoute extends Component {
    render() {
        const { path, children, exact } = this.props;
        console.log("protected ")
        return <Route exact={exact} to={path}>
            {checkStillLogin() ? children : <Redirect push to="/login" />}
        </Route>
    }
}

export default withRouter(ProtectedRoute);