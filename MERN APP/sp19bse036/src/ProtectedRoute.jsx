import React from 'react';
//import { Redirect, Route } from 'react-router';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
const Protectedroute = ({auth, component:Component, ...rest}) => {
    return (
        <div>
            <Route {...rest} render={(props)=>{
                if(auth) return <Component {...props} />
                if(!auth) return <Navigate to={{path : '/', state : {from : props.location}}} />
            }} />
        </div>
    );
}

export default Protectedroute;
