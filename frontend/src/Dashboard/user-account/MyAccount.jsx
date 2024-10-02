import React from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { useState } from 'react';

import MyBookinngs from './MyBookinngs';
import Profile from './Profile';

import useGetProfile from '../../hooks/UseFetchdata';
import { BASE_URL } from '../../config';

function MyAccount() {
    
    const {dispatch} = useContext(authContext);
    const [tab,setTab] = useState('bookings')
    
    const {data:userData,loading,error} = useGetProfile(`${BASE_URL}/users/profile/me`)

    const handleLogout = ()=>{
        dispatch({type:'LOGOUT'})
    }

  return <div className='max-w-[1770px] px-5 mx-auto'>

    <div className='grid md:grid-cols-3 gap-10'>

        <div className='pb-[50px] px-[30px] rounded-md'>

            <div className='flex items-center jsutify center'>

                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor  '>
                    <img src="" alt="PARIENT IMAGE " className='w-full h-full rounded-full' />
                </figure>

            </div>

            <div className=' text-center mt-4  '>
                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold '> kp </h3>
                <p className=' text-textColor text -[15px] leading-6 font-medium '>   kp@gmail.com    </p>
                <p className=' text-textColor text -[15px] leading-6 font-medium '>   Blood Type: <span className='ml-2 text-headingColor text-[22px]  leading-8 '> B+ </span>   </p>
            </div>

            <div className=' mt-[50px] md:mt-[100px] '>

                <button onClick={handleLogout} className='w-full p-3 text-[16px] leading-7 rounded-md  '> Logout </button>
                <button className='w-full p-3 text-[16px] leading-7 rounded-md  '> Delete </button>

            </div>

        </div>

        <div className='md:col-span-2 md:px-[30px] ' >
            <div>
                
                <button onClick={()=>setTab('bookings')}   
                className={` ${tab==='bookings'} p-2 mr-5 px-5 rounded-md font-semibold text-[16px]  leading-border border-solid `}>
                    MyBookings </button>


                <button  onClick={()=>setTab('settings')} 
                className={` ${tab==='settings' &&  text-white} p-2 mr-5 px-5 rounded-md font-semibold text-[16px]  leading-border border-solid `}>
                    Profile Settings </button>

            </div>

            {
                tab==='bookings' && <MyBookinngs />
            }

            {
                tab==='settings' && <Profile /> 
            }

        </div>

    </div>

  </div>
}

export default MyAccount