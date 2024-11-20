import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col'>
            <div className=''>
                <Navbar />
            </div>
            <div className='bg-slate-100 flex-1 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
