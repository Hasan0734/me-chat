import React from 'react';

interface inputProps {
    placeholder: string,
    style: string,
    type: string
}

const InputBox = ({ placeholder, style, type }: inputProps) => {
    return (
        <>
            <input
                className={`${style} focus:outline-none my-2
              placeholder:text-xs placeholder:text-gray-400`}
                type={type}
                placeholder={placeholder} />
        </>
    );
};

export default InputBox;