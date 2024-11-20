import { Button, Rate } from 'antd';
import React from 'react'

const ProductItems = ({ data }) => {

    function calculateOriginalPrice(discountedPrice, discountPercentage) {
        if (discountPercentage >= 100 || discountPercentage < 0) {
            throw new Error("Invalid discount percentage");
        }
        const originalPrice = discountedPrice / (1 - (discountPercentage / 100));
        return originalPrice.toFixed(2);
    }

    return (
        <div className='border w-[300px] shadow-sm flex flex-col bg-white rounded-md'>
            <div className='border-b'>

                <img src={data?.thumbnail} alt={data?.title} width={300} />
            </div>
            <div className='p-3 flex flex-col justify-between  flex-1'>
                <p className='text-[16px] font-medium text-gray-400'>{data?.title.slice(0, 35)}{data?.title?.length > 35 && "..."}</p>

                <div className='flex gap-1 flex-col'>


                    <p className='text-blue-500 text-[20px] font-bold'>$ {data?.price}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>

                            <p className='text-[12px] text-gray-400 font-medium line-through'>$ {calculateOriginalPrice(data?.price, data?.discountPercentage)}</p>

                            <p className='text-[12px] font-medium bg-red-200 text-red-500 py-[2px] px-1 rounded-sm'>{data?.discountPercentage}% off</p>
                        </div>
                        <p className='text-[12px] text-red-500'>{data?.stock} left</p>
                    </div>
                    <div className='flex gap-2 items-center my-1'>

                        <Rate allowHalf disabled defaultValue={data?.rating} />
                        <p>{`(${data?.reviews?.length})`}</p>
                    </div>
                    <div className='w-full mt-2'>

                        <Button type='primary' className='w-full text-[14px] font-semibold'>ADD TO CART</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItems
