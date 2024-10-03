import React from 'react'
import { useContext } from 'react';
import {BiMenu} from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Tabs = (tab,settab) => {

   const dispatch =useContext(authContext)
   const navigate =useNavigate()

   const handleLogout =()=>
   {
    dispatch({type:"LOGOUT"});
    navigate('/');
   }
    
  return <div>
        <span className='lg:hidden'><BiMenu className="w-6 h-6 cursor-pointer"/>
        </span>
        <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md'>
        <button 
        onClick={()=>settab('overview')}
        className={"${tab==='overview' ? 'bg-white-100 text-primaryColor' :'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md"}>Overview</button>
            
        <button 
          onClick={()=>settab('appointments')}
        className={"${tab==='appointments' ? 'bg-white-100 text-primaryColor' :'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md"}>Apoointments</button>
        
        <button
          onClick={()=>settab('settings')}
        className={"${tab==='settings' ? 'bg-white-100 text-primaryColor' :'bg-transparent text-headingColor'} w-full btn mt-0 rounded-md"}>settings</button>

<div className=' mt-[50px] md:mt-[100px] '>

<button onClick={handleLogout} className='w-full p-3 text-[16px] leading-7 rounded-md  '> Logout </button>
<button className='w-full p-3 text-[16px] leading-7 rounded-md  '> Delete account</button>

</div>
        </div>
    </div>
  
}

export default Tabs