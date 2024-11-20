import React from 'react'
import { HeartTwoTone, ShoppingTwoTone } from "@ant-design/icons";
import { Badge } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const cartData = useSelector(state => state.cart?.items)
    console.log()
    const navigate = useNavigate()
    return (

        <nav className='flex justify-between max-w-[1500px] w-screen mx-auto p-3'>
            <div className='flex items-center gap-6 cursor-pointer' onClick={() => {
                navigate("/")
            }}>
                <img src="/images/favicon/favicon.png" alt="Logo" />
                <p className='font-bold text-2xl'>ShoppyGlobe</p>
            </div>

            <div className='flex items-center gap-5 '>

                <Badge count={cartData.length} onClick={() => {
                    navigate('/cart')
                }}>
                    <ShoppingTwoTone style={{
                        fontSize: "24px"
                    }} className='cursor-pointer' />
                </Badge>


                <HeartTwoTone style={{
                    fontSize: "24px"
                }} className='cursor-pointer' />


            </div>

        </nav>
    )
}

export default Navbar
