import { EllipsisVerticalIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import React from 'react';

const UserNav = () => {
    return (
        <>
            <div className='bg-white py-2 px-3 shadow-lg flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src="/assets/user.jpg" alt="" />
                    <h5 className='text-sm font-medium'>Jahid Hasan</h5>
                </div>
                <div className='flex items-center gap-x-4'>
                    <button className='hover:bg-gray-300 p-3 rounded-full'>
                        <PhoneIcon color='black' className='w-5' />
                    </button>
                    <button className='hover:bg-gray-300 p-3 rounded-full'>
                        <VideoCameraIcon color='black' className='w-5' />
                    </button>
                    <button className='hover:bg-gray-300 p-3 rounded-full'>
                        <EllipsisVerticalIcon color='black' className='w-5' />
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserNav;