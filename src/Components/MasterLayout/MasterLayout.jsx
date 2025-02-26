import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD

const MasterLayout = () => {
    return (
        <>
            <Sidebar />
      <Outlet />
        </>
=======
import "./MasterLayout.css";  

const MasterLayout = () => {
    return (
        <div className="layout">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <main className="content">
                <Outlet />
            </main>
        </div>
>>>>>>> 178441b (Initial commit)
    );
}

export default MasterLayout;
