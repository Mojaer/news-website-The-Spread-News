import React from 'react';
import { Navigate } from 'react-router-dom';
import useTitle from '../../../useTitle/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Navigate to='/category/0'></Navigate>


        </div>
    );
};

export default Home;