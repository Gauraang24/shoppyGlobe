import React from 'react'
import { HeartTwoTone, ShoppingTwoTone } from "@ant-design/icons";

const Navbar = () => {
    return (

        <nav className='flex justify-between max-w-[1500px] w-screen mx-auto p-3'>
            <div className='flex items-center gap-6 cursor-pointer'>
                <img src="/images/favicon/favicon.png" alt="Logo" />
                <p className='font-bold text-2xl'>ShoppyGlobe</p>
            </div>

            <div className='flex items-center gap-5 '>

                <ShoppingTwoTone style={{
                    fontSize: "24px"
                }} className='cursor-pointer' />


                <HeartTwoTone style={{
                    fontSize: "24px"
                }} className='cursor-pointer' />


            </div>

        </nav>
    )
}

export default Navbar
