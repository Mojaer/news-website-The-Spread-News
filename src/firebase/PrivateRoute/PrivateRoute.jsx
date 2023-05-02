import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext)
    const location = useLocation()
    // console.log(location)

    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation="grow" size='lg' />
                <Spinner animation="grow" size='lg' />
                <Spinner animation="grow" size='lg' />
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' replace state={{ from: location }}></Navigate>
    }
};

export default PrivateRoute;