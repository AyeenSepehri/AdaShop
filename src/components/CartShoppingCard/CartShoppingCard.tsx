import React from "react";
import {useDispatch} from "react-redux";
import {addProduct, decrementProduct} from "../../store/states/productsSlice";

interface ShoppingCartCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
interface ProductDataTypes {
    productData: ShoppingCartCardProps
}

const CartShoppingCard: React.FC<ProductDataTypes>  = ({productData} : ProductDataTypes) => {
    const {id, name, price, image, quantity} = productData;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct({ id, name, price, image, quantity: 1 })); // مقدار اولیه quantity
    };

    const handleDecrement = () => {
        dispatch(decrementProduct(id));
    };

    const totalPrice = price * quantity;
    return (
        <div className="md:flex justify-between items-center px-12 py-5 border-2 border-purple-700 rounded">
            <div className="flex items-center justify-center gap-5">
                <img src={image} alt="product img" className="h-28"/>
                <div className="flex flex-col items-center text-center gap-3">
                    <p className=" text-lg text-purple-700 font-semibold">
                        {name}
                    </p>
                    <span className="text-gray-500 text-lg">
                        {price.toLocaleString()} تومان
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
                <span className="text-lg text-fuchsia-500 font-semibold">
                        {totalPrice.toLocaleString()} تومان
                </span>
                <div className="flex justify-center gap-5 items-center w-full h-11">
                    <button
                        className="bg-purple-700 text-white rounded p-4 h-11 flex justify-center items-center text-xl font-medium"
                        onClick={handleAddToCart} // increase number of products
                    >
                        +
                    </button>
                    <span className="font-bold text-xl">{quantity}</span>
                    <button
                        className="border border-purple-700 text-purple-700 rounded p-4 h-11 flex justify-center items-center text-2xl font-medium"
                        onClick={handleDecrement} // decrease number of products
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartShoppingCard;