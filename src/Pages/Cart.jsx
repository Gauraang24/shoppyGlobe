import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../Components/CartItems';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.addedQuantity, 0).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-5">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty. Start shopping!</p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
                    <div className="p-5">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h2 className="text-xl font-semibold">Cart Items</h2>
                            <p className="text-gray-600">Total: ${calculateTotal()}</p>
                        </div>

                        <div className="mt-5 space-y-5">
                            {cartItems.map((item) => (
                                <CartItems item={item} key={item?.id} />
                            ))}
                        </div>

                        <div className="flex justify-end mt-5">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Checkout (${calculateTotal()})
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
