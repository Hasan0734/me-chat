import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import React from 'react';
import InputBox from '../components/InputBox';
import { Link } from "react-router-dom"
import SubmitBtn from '../components/SubmitBtn';

const Register = () => {
    return (
        <div className='h-screen w-screen bg-[#f7f7f7] flex items-center justify-center px-4'>
            <div>
                <div className='flex items-center justify-center mb-5'>
                    <div className='w-20 h-20 flex items-center justify-center rounded-2xl self-center
        bg-gradient-to-b from-pink-700/80 to-red-600/80 '>

                        <ChatBubbleOvalLeftEllipsisIcon color='white' className='w-12 h-12' />
                    </div>
                </div>
                <h3 className='text-center text-3xl font-medium leading-8 text-gray-700
        '>Sign up</h3>
                <div className='bg-white max-w-[350px] p-7 rounded-3xl mt-5
       drop-shadow-[0_18px_30px_rgba(0,0,0,0.05)]'>
                    <form action="">
                        <InputBox
                            style='p-3 bg-gray-200/80 w-full  text-gray-500
              rounded text-sm'
                            type="text"
                            placeholder='Phone Number or Email' />

                        <InputBox
                            style='p-3 bg-gray-200/80 w-full  text-gray-500
              rounded text-sm'
                            type="password"
                            placeholder='Password' />

                        <SubmitBtn title='Sign up' />
                        <div className='text-center mt-2'>
                            <a className='text-xs text-gray-500 font-medium  leading-7'>Already have account?</a> <Link to={"/login"}>
                                <a className='text-xs text-red-500 font-medium  leading-7'>Sign in</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;