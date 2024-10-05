import React from 'react';
import './DoctorAbout.css';  // Import the CSS file
import { formateDate } from '../../utils/formateDate';  // Import the corrected function

const DoctorAbout = ({name,about,qualifications,experiences}) => {
  return (
    <div className="doctor-about-container">
      <div>
        <h3 className="heading">
          About of <span>Saturn Som</span>
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id obcaecati nostrum. Doloremque natus provident blanditiis. Esse accusantium maxime ullam nemo deleniti asperiores eum nesciunt!
        </p>
      </div>

      <div className="education-section">
        <h3 className="education-heading">Education</h3>
        <ul className="education-list">
          {qualifications?.map((item,index)=> <li className="education-item">
            <div>
              <span className="date">{formateDate({item.startingDate})} - {formateDate(item.endingDate)}</span>
              <p className="degree">{item.degree}</p>
              </div>
              <p className="degree">{item.university}</p>
          </li>)}
          </ul>
          </div>
          
          <li className="education-item">
            <div>
              <span className="date">{formateDate('2010-04-12')}</span>
              <p className="degree">PhD in Surgery</p>
              <p className="degree">Apollo Hospital, New York</p>
            </div>
          </li>
      

      <div className="experience-section">
        <h3 className="education-heading">Experience</h3>
        <ul className="experience-list">
          {experiences?.map((item,index)=><li key={index} className="experience-item">
          <span className="date">{formateDate({item.startingDate})} - {formateDate(item.endingDate)}</span>
            <p className="role">{item.position}</p>
        
            <p className="degree">{item.hospital}</p>
          </li>)}
      
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;


