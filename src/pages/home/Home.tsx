// src/components/home/Home.tsx
import React, { useState } from 'react';
import Input from '../../components/input/Input';
import ProductCard from '../../components/productCard/ProductCard';
import { products } from '../../mock/products';

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
        <div>

            <Input value={filter} onChange={handleFilterChange} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>

            {visibleCount < filteredProducts.length && (
                <button
                    onClick={loadMoreProducts}
                    className="bg-purple-600 text-white py-2 px-4 rounded mt-4"
                >
                    مشاهده بیشتر
                </button>
            )}
        </div>
    );
};

export default Home;
