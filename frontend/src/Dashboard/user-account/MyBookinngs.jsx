import React from 'react'
import UseFetchdata from '../../hooks/UseFetchdata'
import { BASE_URL } from '../../config'
import DoctorCard from './../../components/theDoctors/DoctorCard'

const MyBookinngs = () => {
  const {data:appointments,loading,error} = UseFetchdata(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div classname="grid grid-cols lg:grid-cols-2 gap-5" >
      {
        appointments.map(doctor=>  <DoctorCard doctor={doctor} key={doctor.id} /> )
      }

      {
        appointments.length===0 && <h2  classname="mt-5 text text-[20px] " >No appoinments Booked</h2>
      }

    </div>
  )

  

};

export default MyBookinngs