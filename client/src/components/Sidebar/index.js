import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Auth from "../../utils/auth";

const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return (
        <div className= {sidebarOpen ? "sidebar-responsive" : ""}id="sidebar">
            <div className="brand">
                <h1>Admin Dashboard</h1>
            </div>
            
           {/*  <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>*/}

            <div className="sidebar-menu">
                <div className="sidebar-links active-menu-link">
                    <Link to='/t01ZUNtMmCdpJdMX71hI'>
                        <i className="fa fa-clipboard">
                        </i>Check-in
                    </Link>
                </div>
                    
                <div className="sidebar-links">
                   <Link to='/Customer'>
                       <i className="fa fa-users">
                        </i>Customers
                    </Link>
                </div>

                <div className="sidebar-links">
                    
                <a href="/" onClick={() => Auth.logout()}><i className="fa fa-sign-out"></i>Log out</a>
                </div>
            </div>
        </div>

    )
}

export default Sidebar