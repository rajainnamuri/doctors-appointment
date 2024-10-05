import React, { useState } from 'react';
import Loader from '../../components/Loader';
import Error from '../../components/Error/Error';
import useGetprofile from '../../hooks/UseFetchdata';
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import starIcon from '../../assets/images/starIcon.png';
import DoctorAbout from './../../pages/Doctors/DoctorAbout';
import Profile from './Profile';
import Appointments from './Appointment';

function Dashboard() {

  const { data, loading, error } = useGetprofile('${BASE_URL}/doctors/profile/me');

  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {
          !loading && !error && (
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab} />

              <div className="lg:col-span-2">
                {data.isApproved === 'pending' && (
                  <div className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50" role="alert">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 text-yellow-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.763-1.36 2.723-1.36 3.486 0l6.216 11.09C18.694 15.91 17.733 17 16.473 17H3.527c-1.26 0-2.22-1.09-1.486-2.81l6.216-11.09zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium">
                     <div className='ml-3 text-sm font-medium'>
                      to get approval please complete your profile. we will review and approve manually in 3 days. 
                     </div>
                    </span>
                  </div>
                )}

              <div className='mt-8'>
            {tab==='overview' && <div>
              <div className='flex items-center gap-4 mb-10'>
                <figure className='max-w-[200px] max-h-[200px]'><img src={data?.photo} alt="" className='w-full'/></figure>

                <div>
                  <span className='bg-[#CCF0F3] text-irisBluecolor  py-4  rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                    {data.specialization} Surgeon
                  </span>

                <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">{data.name}</h3>   
                  
                  <div className="flex items-center gap-[6px]">
                    <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold '>
                      <img src={starIcon} alt="" />
                    {data.averageRating}
                    </span>

                    <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold '>
                    
                    ({data.totalRating})
                    </span>
                    
                  </div>
                  <p className='text__para font-[15px] lg:max-w-[399px] leading-6'>{data?.bio}</p>
                </div>
              </div>
              <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications}
              experiences={data.experience}/>
              </div>
              }
            {tab==='appointments' && <Appointments appointments={data.appointments}/>}
            {tab==='settings' && <Profile doctorData={data}/>}
                
              </div>
                
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default Dashboard;
