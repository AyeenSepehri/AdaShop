import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, decrementProduct } from '../../store/states/productsSlice';
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon";
import { RootState } from '../../store/store';

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
    const dispatch = useDispatch();

    // دریافت اطلاعات محصول از state ریداکس
    const product = useSelector((state: RootState) => state.products.find((product) => product.id === id));
    const itemsNumber = product ? product.quantity : 0;

    const handleAddToCart = () => {
        dispatch(addProduct({ id, name, price, image, quantity: 1 })); // مقدار اولیه quantity
    };

    const handleDecrement = () => {
        dispatch(decrementProduct(id));
    };

    return (
        <div className="p-4 hover:shadow-lg">
            <img src={image} alt={name} className="mb-4 h-48 mx-auto"/> {/* نمایش تصویر محصول */}
            <h2 className="text-start text-lg text-purple-700 font-semibold mb-2">{name}</h2>
            <p className="text-end text-fuchsia-500 font-semibold mb-2">{price.toLocaleString()} تومان</p>

            {itemsNumber === 0 ? (
                <div className="flex justify-center items-center w-full h-11">
                    <button
                        className="h-11 w-full bg-purple-100 text-purple-700 py-2 px-4 rounded flex justify-center items-center gap-5 font-medium"
                        onClick={handleAddToCart}
                    >
                        خرید محصول
                        <ShoppingCartIcon color={"#7e22ce"}/>
                    </button>
                </div>
            ) : (
                <div className="flex justify-center gap-5 items-center w-full h-11">
                    <button
                        className="bg-purple-700 text-white rounded p-4 h-11 flex justify-center items-center text-xl font-medium"
                        onClick={handleAddToCart} // افزایش تعداد
                    >
                        +
                    </button>
                    <span className="font-bold text-xl">{itemsNumber}</span>
                    <button
                        className="border border-purple-700 text-purple-700 rounded p-4 h-11 flex justify-center items-center text-2xl font-medium"
                        onClick={handleDecrement} // کاهش تعداد
                    >
                        -
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
