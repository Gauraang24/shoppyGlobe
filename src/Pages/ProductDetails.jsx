import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Button, Empty, Rate, Spin, Tag } from "antd";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

    const handleAddToCart = () => {
        if (data) {
            dispatch(addItem(data));

            toast.success("Item added to cart!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <ToastContainer />

            <Button
                type="default"
                className="my-4 mx-4"
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </Button>

            {loading ? (
                <div className="mt-10 w-screen text-center">
                    <Spin tip="Loading" size="large">
                        Loading
                    </Spin>
                </div>
            ) : data ? (
                <div className="max-w-[1500px] w-screen mx-auto flex">
                    <div className="w-1/2 h-auto grow bg-white">
                        <img src={data?.thumbnail} alt="" className="w-full" />
                    </div>
                    <div className="w-1/2 h-auto grow mx-5">
                        <h1 className="text-3xl font-bold mt-10 mb-5">{data?.title}</h1>
                        <p className="text-xl font-normal">{data?.description}</p>
                        <div className="flex gap-2 mt-4">
                            <p className="font-normal">Tags :</p>
                            {data?.tags.map((i, index) => {
                                return (
                                    <Tag color="cyan" key={index}>
                                        {i}
                                    </Tag>
                                );
                            })}
                        </div>
                        <div className="flex gap-2 items-center mt-5 mb-10">
                            <Rate allowHalf disabled value={data?.rating} />
                            <p className="leading-[22px]">{`(${data?.reviews?.length})`}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-4xl font-bold">$ {data?.price}</p>
                            <p className="text-[12px] font-medium bg-red-200 text-red-500 py-[2px] px-1 rounded-sm">
                                {data?.discountPercentage}% off
                            </p>
                        </div>
                        <Button
                            type="default"
                            className="rounded-full text-xl font-semibold py-6 px-10 mt-10 border-blue-500 text-blue-500"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </Button>

                        <div className="mt-10">
                            <p className="text-sm font-medium text-gray-400">
                                * {data?.warrantyInformation}
                            </p>
                            <p className="text-sm font-medium text-gray-400">
                                * {data?.shippingInformation}
                            </p>
                            <p className="text-sm font-medium text-gray-400">
                                * {data?.returnPolicy}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <Empty />
            )}
        </>
    );
};

export default ProductDetails;
