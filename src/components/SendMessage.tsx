import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SendMessage = () => {
    return (
        <>
            <div className='fixed bottom-0 min-w-[640px] bg-white py-2 px-3 shadow-md'>
                <form className='flex items-center gap-3'>
                    <input className=' bg-gray-200 p-3 w-full focus:outline-none' type="text" placeholder='Type your message' />
                    <button className='bg-pink-500 p-3 rounded-md' type='submit'>
                        <PaperAirplaneIcon color='white' className='w-5' /></button>
                </form>

            </div>
        </>
    );
};

export default SendMessage;