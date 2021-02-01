import React, { useState } from "react";
import "./Dashboard.css";
import Dashnav from '../components/Dashnav';
import Sidebar from '../components/Sidebar';
 import Checkins from '../components/Checkins';

 const Dashboard = () => {
 
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (

        <div className="dashcontainer">
            <Dashnav sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            { <Checkins />}
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
           
        </div>
    )
}

export default Dashboard;