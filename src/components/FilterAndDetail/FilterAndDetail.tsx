import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface FilterAndDetailProps {
    selectedFilter: string;
    setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterAndDetail: React.FC<FilterAndDetailProps> = ({ selectedFilter, setSelectedFilter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for dropdown
    const products = useSelector((state: RootState) => state.products);

    // Calculate the total number of selected products
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);

    const handleFilterSelect = (filter: string) => {
        setSelectedFilter(filter);
        setIsDropdownOpen(false); // Close dropdown after selection
    };

    // Close the dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className={`${totalItems === 0 ? "justify-end" : "justify-between"} w-full flex flex-col sm:flex-row items-center relative`}>
            {totalItems !== 0 && (
                <p className={`text-fuchsia-500 font-semibold mb-4 sm:mb-0`}>
                    {totalItems} محصول در سبد خرید شما وجود دارد
                </p>
            )}
            <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="rounded flex justify-center items-center gap-2 border border-fuchsia-500 text-fuchsia-500 font-semibold px-3 py-2 relative"
            >
                فیلتر ها
                <img src="/icons/FilterIcon.svg" alt="filterIcon" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className={`absolute top-full w-40 bg-white shadow-md rounded-lg z-10 mt-1 md:left-10 sm:left-1/2 sm:transform sm:-translate-x-1/2`}
                >
                    <ul className="flex flex-col">
                        <li
                            onClick={() => handleFilterSelect("همه")}
                            className={`p-2 cursor-pointer ${selectedFilter === "همه" ? "bg-purple-100" : ""}`}
                        >
                            همه
                        </li>
                        <li
                            onClick={() => handleFilterSelect("ارزان ترین")}
                            className={`p-2 cursor-pointer ${selectedFilter === "ارزان ترین" ? "bg-purple-100" : ""}`}
                        >
                            ارزان ترین
                        </li>
                        <li
                            onClick={() => handleFilterSelect("گران ترین")}
                            className={`p-2 cursor-pointer ${selectedFilter === "گران ترین" ? "bg-purple-100" : ""}`}
                        >
                            گران ترین
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FilterAndDetail;
