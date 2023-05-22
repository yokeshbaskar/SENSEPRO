import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'; 
import {withRouter} from 'react-router-dom';

function AuthRoute({ component: Component, history, ...rest }) {
    let authentication = localStorage.getItem('authentication');

    useEffect(() => {
        if (authentication) {
            if (history.length > 1) {
              
            } else {
                
            }
        }
    });

    return (
        <Route
            {...rest}
            render={(props) => <Component {...props} />}
        />
    );
}

export default withRouter(AuthRoute);
