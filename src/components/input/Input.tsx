import React from 'react';

interface FilterInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="جستجو کنید..."
            className="border border-purple-500 rounded-lg py-2 px-4 w-full max-w-md mb-4"
        />
    );
};

export default FilterInput;
