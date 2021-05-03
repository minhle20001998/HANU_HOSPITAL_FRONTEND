import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom';

class LoginRoute extends Component {
    componentDidMount() {
        console.log("unauthen")
    }

    render() {
        const { isLogin, path, children, exact } = this.props;
        if (isLogin) {
            this.props.history.goBack();
            return null;
        } else {
            return <Route exact={exact} to={path}>
                {children}
            </Route>
        }
    }
}

export default withRouter(LoginRoute);