import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch';
import { Button, Rate, Tag } from 'antd';
import { calculateOriginalPrice } from '../utils/functions';

const ProductDetails = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
    return (
        <>
            <Button type='default' className='my-4 mx-4' onClick={() => {
                navigate(-1)
            }}>Back</Button>

            <div className='max-w-[1500px] w-screen mx-auto flex'>
                <div className='w-1/2 h-auto grow bg-white'>
                    <img src={data?.thumbnail} alt="" className='w-full' />
                </div>
                <div className='w-1/2 h-auto grow mx-5'>
                    <h1 className='text-3xl font-bold mt-10 mb-5'>{data?.title}</h1>
                    <p className='text-xl font-normal'>{data?.description}</p>
                    <div className='flex gap-2 mt-4'>
                        <p className='font-normal'>Tags :</p>
                        {data?.tags.map(i => {
                            return <Tag color="cyan">{i}</Tag>
                        })}
                    </div>
                    <div className='flex gap-2 items-center mt-5 mb-10'>

                        <Rate allowHalf disabled value={data?.rating} />
                        <p className='leading-[22px]'>{`(${data?.reviews?.length})`}</p>
                    </div>
                    <div className='flex items-center gap-4'>

                        <p className='text-4xl font-bold'>$ {data?.price}</p>
                        {/* <p className='line-through'>{calculateOriginalPrice(data?.price, data?.discountPercentage)}</p> */}
                        <p className='text-[12px] font-medium bg-red-200 text-red-500 py-[2px] px-1 rounded-sm'>{data?.discountPercentage}% off</p>
                    </div>
                    <Button type='default' className='rounded-full text-xl font-semibold py-6 px-10 mt-10 border-blue-500 text-blue-500'>Add to cart</Button>

                    <div className='mt-10'>

                        <p className='text-sm font-medium text-gray-400'>* {data?.warrantyInformation}</p>
                        <p className='text-sm font-medium text-gray-400'>* {data?.shippingInformation}</p>
                        <p className='text-sm font-medium text-gray-400'>* {data?.returnPolicy}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
