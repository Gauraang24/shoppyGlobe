import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../store/cartSlice'
import { toast } from 'react-toastify'

const CartItems = ({ item }) => {
    const dispatch = useDispatch()
    const handleRemove = (itemId, title) => {
        dispatch(removeItem(itemId))
        toast.success(`${title} has been removed from your cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
        >
            <div className="flex items-center gap-5">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                />
                <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() =>
                        dispatch(
                            updateQuantity({
                                id: item.id,
                                addedQuantity: item.addedQuantity - 1,
                            })
                        )
                    }
                    disabled={item.addedQuantity === 1}
                >
                    -
                </button>
                <span className="text-lg font-medium">{item.addedQuantity}</span>
                <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() =>
                        dispatch(
                            updateQuantity({
                                id: item.id,
                                addedQuantity: item.addedQuantity + 1,
                            })
                        )
                    }
                >
                    +
                </button>
            </div>

            <div className="flex items-center gap-3">
                <p className="text-lg font-medium">
                    ${(item.price * item.addedQuantity).toFixed(2)}
                </p>
                <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleRemove(item.id, item.title)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartItems
