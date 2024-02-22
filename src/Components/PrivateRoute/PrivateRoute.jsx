/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    const location = useLocation();

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={{from: location}} to='/login' replace></Navigate>
        </div>
    );
};

export default PrivateRoute;