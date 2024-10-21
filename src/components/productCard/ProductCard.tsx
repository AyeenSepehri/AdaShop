// src/components/ProductCard.tsx
import React from 'react';
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
    return (
        <div className="p-4 hover:shadow-lg">
            <img src={image} alt={name} className="mb-4 h-48 mx-auto" /> {/* Use actual image */}
            <h2 className="text-start text-lg mb-2">{name}</h2>
            <p className="text-end text-gray-500 mb-2">{price.toLocaleString()} تومان</p>
            <div className="flex justify-center items-center w-full">
                <button
                    className="w-full bg-purple-100 text-purple-700 py-2 px-4 rounded flex justify-center items-center gap-5 font-medium">
                    خرید محصول
                    <ShoppingCartIcon color={"#7e22ce"}/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
