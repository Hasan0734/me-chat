import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
    return (
        <>
            <div className=' bg-white h-screen col-span-3 shadow-lg'>
                {/* profile */}
                <div className='bg-slate-200 p-5'>
                    <div className='flex items-center gap-4 pb-4'>
                        <div className='w-10 h-10 flex items-center justify-center 
                        rounded-full self-center
        bg-gradient-to-b from-pink-700/80 to-red-600/80 '>

                            <ChatBubbleOvalLeftEllipsisIcon color='white' className='w-5 h-5' />
                        </div>
                        <h3 className='text-2xl font-semibold'>Me Chat</h3>
                    </div>
                    <div>
                        <div className=' flex justify-center'>
                            <img className='w-16 h-16 rounded-full' src="/assets/user.jpg" alt="user" />
                        </div>
                        <h4 className='text-center text-sm font-semibold'>Jahid Hasan</h4>
                    </div>
                </div>
                <div className=''>

                </div>
            </div>
        </>
    );
};

export default Sidebar;