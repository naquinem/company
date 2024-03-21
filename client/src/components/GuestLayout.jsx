import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className='guest'>
        <div>
            <Outlet />
        </div>


    </div>
  )
}

export default GuestLayout
