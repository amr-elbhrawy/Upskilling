import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
    return (
        <>
            <Sidebar />
      <Outlet />
        </>
    );
}

export default MasterLayout;
