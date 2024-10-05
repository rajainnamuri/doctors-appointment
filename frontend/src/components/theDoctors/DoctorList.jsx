import React from 'react';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import './DoctorList.css'; // Importing the CSS file
import {BASE URL} from './../../config';
import useFetchData from './../../hooks/UseFetchdata';
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const DoctorList = () => {
  const (data,loading,error)=useFetchData('${BASE_URl}/doctors')
  return (
    {loading&&<loader/>}
    {error&&<Error/>}
    <div className='doctor-list'>
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
