import React from 'react'
import ProductItems from '../Components/ProductItems'

const ProductList = ({ data }) => {
    return (
        <div className='flex justify-evenly flex-wrap gap-4 w-full mx-4'>
            {data.map(i => {
                return <ProductItems data={i} />
            })}
        </div>
    )
}

export default ProductList
