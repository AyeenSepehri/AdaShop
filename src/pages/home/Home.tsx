import React, { useState } from 'react';
import Input from '../../components/input/Input';
import ProductCard from '../../components/productCard/ProductCard';
import { products as productData } from '../../mock/products';
import FilterAndDetail from "../../components/FilterAndDetail/FilterAndDetail";

const Home: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedFilter, setSelectedFilter] = useState('همه');

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const loadMoreProducts = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    // Apply filtering based on the input search value
    const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    // Apply sorting based on the selected filter
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (selectedFilter === 'ارزان ترین') {
            return a.price - b.price;
        } else if (selectedFilter === 'گران ترین') {
            return b.price - a.price;
        } else {
            return 0; // Default order for 'همه'
        }
    });

    return (
        <div className="w-full">

            <div className="w-full mt-5">
                <Input value={filter} onChange={handleFilterChange} />
            </div>

            <div className="mt-5">
                <FilterAndDetail selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {sortedProducts.slice(0, visibleCount).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>

            {visibleCount < sortedProducts.length && (
                <button
                    onClick={loadMoreProducts}
                    className="mx-auto flex justify-center items-center text-purple-700 font-semibold gap-2 mt-10"
                >
                    مشاهده بیشتر
                    <img src="/icons/chevronDownIcon.svg" alt={"chevron"} />
                </button>
            )}

            {sortedProducts.length === 0 && (
                <div className="grid place-items-center text-purple-700 font-semibold">
                    موردی یافت نشد!
                </div>
            )}
        </div>
    );
};

export default Home;
