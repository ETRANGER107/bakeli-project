import React from 'react'
import { Redirect, Route } from 'react-router'
import * as ROUTES from '../../Constant/routes';

const ProtectedRoute = ({authenticated : authenticated, component: Component, ...rest}) => {
    return <Route {...rest} render={(props) =>{
        if(authenticated){
            return <Component/>
        } else{
            props.history.push("/")
        }
    }}/>
}

export default ProtectedRoute;
