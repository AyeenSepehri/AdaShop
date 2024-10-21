import React,{useState} from 'react';
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({name, price, image}) => {
    const [itemsNumber, setItemsNumber] = useState<number>(0);

    return (
        <div className="p-4 hover:shadow-lg">
            <img src={image} alt={name} className="mb-4 h-48 mx-auto"/> {/* Use actual image */}
            <h2 className="text-start text-lg mb-2">{name}</h2>
            <p className="text-end text-gray-500 mb-2">{price.toLocaleString()} تومان</p>
            {itemsNumber === 0 &&
                <div className="flex justify-center items-center w-full h-11">
                    <button
                        className="h-11 w-full bg-purple-100 text-purple-700 py-2 px-4 rounded flex justify-center items-center gap-5 font-medium"
                        onClick={() => setItemsNumber(1)}
                    >
                        خرید محصول
                        <ShoppingCartIcon color={"#7e22ce"}/>
                    </button>
                </div>
            }
            {itemsNumber !== 0 &&
                <div className="flex justify-center gap-5 items-center w-full h-11">
                    <button
                        className="bg-purple-700 text-white rounded p-4 h-11 flex justify-center items-center text-xl font-medium"
                        onClick={() => setItemsNumber(itemsNumber + 1)}
                    >
                        +
                    </button>
                    <span className="font-bold text-xl">
                        {itemsNumber}
                    </span>
                    <button
                        className="border border-purple-700 text-purple-700 rounded p-4 h-11 flex justify-center items-center text-2xl font-medium"
                        onClick={() => setItemsNumber(itemsNumber - 1)}
                    >
                        -
                    </button>
                </div>
            }
        </div>
    );
};

export default ProductCard;
