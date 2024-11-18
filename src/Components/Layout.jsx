import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col'>
            <div className='border-2'>
                <Navbar />
            </div>
            <div className='border-2 border-red-500 flex-1 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
