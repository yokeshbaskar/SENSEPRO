import React from 'react';
import { Route, Redirect,useLocation,useHistory } from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest }) {
    let authentication = localStorage.getItem('authentication');
    const location = useLocation();
    const history = useHistory();

    

    const logout = () => {
        localStorage.removeItem('authentication')
        localStorage.clear()
        
    }

    return (
        <Route
            {...rest}
            render={props =>
                authentication ? (
                    <>
                    <div className="main-container">
                        <div className="container-fluid">
                              
                        </div>
                    </div>
                    </>
                ) : (
                        <Redirect
                            to={{
                                pathname: "/secondpage",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
            }
        />
        
    );
}

export default PrivateRoute;
