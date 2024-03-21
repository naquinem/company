import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../template/Header';
import Aside from '../template/Aside';
import Footer from '../template/Footer';
import '../style/Style.scss';


const ProtectedLayout = () => {
  return (
    <div className='protected-layout'>
        <Header />
        <div className='main-container'>
            <div className='a-side'>
                <Aside />
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
        <div className="footer">
            <Footer/>
        </div>

    </div>
  )
}

export default ProtectedLayout
