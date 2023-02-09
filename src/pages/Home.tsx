import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, EllipsisVerticalIcon, PaperAirplaneIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import Sidebar from '../components/Sidebar';
import Sidebar2 from '../components/Sidebar2';
import SendMessage from '../components/SendMessage';
import UserNav from '../components/UserNav';
const Home = () => {
    return (
        <div className='bg-[#f7f7f7] w-screen h-screen overflow-hidden'>
            <div className='grid grid-cols-12'>

                <Sidebar />

                <div className='col-span-6 relative '>
                    <UserNav />
                    <div className='overflow-y-scroll h-full'>
                        <ul className='w-full py-2 px-5'>
                            <li className='text-left py-2'>Hello world1</li>
                            <li className='text-right py-2'>Hello world2</li>
                            <li className='text-left py-2'>Hello world3</li>
                            <li className='text-right py-2'>Hello world4</li>
                            <li className='text-left py-2'>Hello world5</li>
                            <li className='text-right py-2'>Hello world6</li>
                            <li className='text-left py-2'>Hello world7</li>
                            <li className='text-right py-2'>Hello world8</li>
                            <li className='text-left py-2'>Hello world9</li>
                            <li className='text-right py-2'>Hello world10</li>
                            <li className='text-left py-2'>Hello world11</li>
                            <li className='text-right py-2'>Hello world12</li>
                            <li className='text-left py-2'>Hello world13</li>
                            <li className='text-right py-2'>Hello world14</li>
                            <li className='text-left py-2'>Hello world15</li>
                            <li className='text-right py-2'>Hello world16</li>
                            <li className='text-left py-2'>Hello world17</li>
                            <li className='text-right py-2'>Hello world18</li>
                            <li className='text-left py-2'>Hello world19</li>
                            <li className='text-right py-2'>Hello world20</li>
                            <li className='text-left py-2'>Hello world21</li>
                            <li className='text-right py-2'>Hello world22</li>
                            <li className='text-left py-2'>Hello world23</li>
                        </ul>
                    </div>
                    <SendMessage />
                </div>
                <Sidebar2 />
            </div>
        </div>
    );
};

export default Home;