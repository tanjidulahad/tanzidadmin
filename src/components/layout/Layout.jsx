import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import Sidebar from '../shared/sidebar/Sidebar';
import "./layout.scss"

const Layout = () => {
    return (
        <div className='mainContainter'>
            <Sidebar />
            <div className='childContainer'>
            <Navbar/>
            <Outlet />
            </div>
        </div>

    );
};

export default Layout;