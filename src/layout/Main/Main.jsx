/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../Components/SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;