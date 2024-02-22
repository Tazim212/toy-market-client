/* eslint-disable no-unused-vars */
import React from 'react';
import errorimg from '../../../../assets/images/error.avif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto mt-20' src={errorimg} alt="" />
            <Link to='/'><button className='btn ms-96'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;