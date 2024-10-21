import React from 'react';
import BagIcon from "../../assets/icons/BagIcon"; // Assuming this is a .tsx file returning an SVG

interface FilterInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ value, onChange }) => {
    return (
        <div className="relative w-full mb-4">
            {/* Bag Icon positioned inside the input */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <BagIcon color={"#8e03d0"} /> {/* BagIcon as a dynamic color SVG */}
            </div>

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="جستجو کنید..."
                className="w-full h-14 pl-12 pr-4 border-2 border-fuchsia-500 rounded-lg focus:border-purple-700 outline-none transition-colors duration-200 bg-purple-100"
            />
        </div>
    );
};

export default FilterInput;
