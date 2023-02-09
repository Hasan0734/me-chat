import React from 'react';

interface btnProps {
    title: string
}

const SubmitBtn = ({ title }: btnProps) => {
    return (
        <button
            type='submit'
            className='p-[10px] w-full rounded-md bg-gradient-to-b mt-2 text-white text-sm
         from-pink-700/80 to-red-600/80'>{title}</button>
    );
};

export default SubmitBtn;