import React, { useState } from 'react';
import Input from '../../components/input/Input';
import ProductCard from '../../components/productCard/ProductCard';
import { products } from '../../mock/products';
import FilterAndDetail from "../../components/FilterAndDetail/FilterAndDetail";

const Home: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const loadMoreProducts = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="w-full">

            <div className="w-full mt-5">
                <Input value={filter} onChange={handleFilterChange} />
            </div>

            <div className="mt-5">
                <FilterAndDetail/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>

            {visibleCount < filteredProducts.length && (
                <button
                    onClick={loadMoreProducts}
                    className="mx-auto flex justify-center items-center text-purple-700 font-semibold gap-2 mt-10"
                >
                    مشاهده بیشتر
                    <img src="/icons/chevronDownIcon.svg" alt={"chevron"}/>
                </button>
            )}
            { filteredProducts.length === 0 && (
                <div className="grid place-items-center text-purple-700 font-semibold">
                    موردی یافت نشد!
                </div>
            )
            }
        </div>
    );
};

export default Home;
