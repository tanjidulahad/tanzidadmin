import React from 'react';
import "./sidebar.scss"
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className="top">
                <span className='logo'>tanzidadmin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <li><PersonOutlineIcon className='icon'/><span>Users</span></li>
                    <li><Inventory2OutlinedIcon className='icon'/><span>Products</span></li>
                    <li><ViewStreamOutlinedIcon className='icon'/><span>Orders</span></li>
                    <li><AirportShuttleOutlinedIcon className='icon'/><span>Delivery</span></li>
                    <p className="title">USEFUL</p>
                    <li><AssessmentOutlinedIcon className='icon'/><span>Stats</span></li>
                    <li><NotificationsNoneOutlinedIcon className='icon'/><span>Notifications</span></li>
                    <p className="title">SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className='icon'/><span>System Health</span></li>
                    <li><PsychologyOutlinedIcon className='icon'/><span>Logs</span></li>
                    <li><SettingsApplicationsSharpIcon className='icon'/><span>Settings</span></li>
                    <p className="title">USER</p>
                    <li><AccountCircleOutlinedIcon className='icon'/><span>Profile</span></li>
                    <li><LogoutOutlinedIcon className='icon'/><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;