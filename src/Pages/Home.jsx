import { Divider, Empty, Input, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import useFetch from '../utils/useFetch';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Home = () => {
    const { data = { products: [] }, loading, error } = useFetch("https://dummyjson.com/products");
    const [productList, setProductList] = useState(data?.products);
    const [searchValue, setSearchValue] = useState('');

    const cartData = useSelector((state) => {
        return state?.cart?.items
    })
    console.log("CartData::", cartData)

    useEffect(() => {
        setProductList(data?.products)
    }, [data])

    useEffect(() => {
        if (searchValue === "") {
            setProductList(data?.products)
        } else {
            const filteredData = data?.products?.filter(i => {
                return i?.title.toLowerCase().includes(searchValue)
            })
            setProductList(filteredData)
        }
    }, [searchValue]);

    // useEffect(() => {
    //     let filteredData = data?.products;
    //     if (categ !== ""){
    //         filteredData = filteredData.filter((i) =>
    //            i.category === activeCategory
    //         );
    //     }
    // }, [])

    // useEffect(() => {
    //     let filteredData = data?.products;
    //     if (searchValue) {
    //         console.log("search-Condition")
    //         filteredData = productList.filter((i) =>
    //             i?.title?.toLowerCase().includes(searchValue.toLowerCase())
    //         );
    //     }
    //     if (activeCategory) {
    //         console.log("category-Condition")
    //         if (activeCategory === "all" && searchValue === "") {
    //             filteredData = data?.products
    //         } else {
    //             filteredData = filteredData.filter((i) => i?.category === activeCategory);
    //         }
    //     }
    //     setProductList(filteredData);
    // }, [searchValue, activeCategory, data]);

    return (
        <div className="w-screen">
            {loading && <Spin tip="Loading" size="large">Loading</Spin>}
            {error && <h1>Error: {error}</h1>}
            {/* {productList?.length ? ( */}
            <>
                <img src={`/images/Banner.jpg`} alt="Banner" className="w-screen" />
                <div className="max-w-[1500px] w-full overflow-x-hidden mx-auto">
                    <div className="text-center my-5">

                        <Input
                            className="max-w-[500px] mx-4"
                            placeholder="Search Something..."
                            onChange={(e) => setSearchValue(e.target.value)}
                            prefix={<SearchOutlined />}
                            value={searchValue}
                        />
                        {/* <Button type="primary">Search</Button> */}
                    </div>

                    {productList?.length ? (<>
                        <Divider className=' max-w-[1500px] w-screen' style={{
                            borderColor: "black"
                        }}><p className='text-3xl mx-10 my-5'>Products</p> </Divider>
                        <ProductList data={productList} />
                    </>
                    ) : (
                        <Empty />
                    )}
                </div>
            </>

        </div>
    );
};

export default Home;
