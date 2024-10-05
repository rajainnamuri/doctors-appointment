import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketprice: '0',
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
    experiences: [{ startingDate: '', endingDate: '', position: '', hospital: '' }],
    timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
    about:'',
    photo:null,
  });
useEffect(()=>{
  setFormData({
    name:doctorData?.name,
    email: doctorData?.email,
    phone: doctorData?.phone,
    bio: doctorData?.bio,
    gender: doctorData?.gender,
    specialization: doctorData?.specialization,
    ticketprice: doctorData?.ticketprice,
    qualifications:doctorData?.qualifications,
    experiences: doctorData?.experiences,
    timeSlots: doctorData?.timeSlots,
    about:doctorData?.about,
    photo:doctorData?.photo,
  })
},)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
      <form>
        {/* Name */}
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email"
            className="form__input"
            readOnly
            aria-readonly
            disabled
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="phone number"
            className="form__input"
            readOnly
            aria-readonly
            disabled
          />
        </div>

        {/* Bio */}
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            readOnly
            aria-readonly
            maxLength={100}
          />
        </div>

        {/* Gender, Specialization, Ticket Price */}
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price</p>
              <input
                type="number"
                placeholder="100"
                name="ticketprice"
                value={formData.ticketprice}
                className="form__input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-5">
          <p className="form__label">Qualifications</p>
          {formData.qualifications.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name={`qualifications[${index}].startingDate`}
                    value={item.startingDate}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name={`qualifications[${index}].endingDate`}
                    value={item.endingDate}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Degree</p>
                  <input
                    type="text"
                    name={`qualifications[${index}].degree`}
                    value={item.degree}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div>
                  <p className="form__label">University</p>
                  <input
                    type="text"
                    name={`qualifications[${index}].university`}
                    value={item.university}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>
              </div>

              <button
                type="button"
                className="p-2 text-white bg-red-500 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button type="button" className="px-5 py-2 text-white rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer">
            Add Qualification
          </button>
        </div>

        {/* Experiences */}
        <div className="mb-5">
          <p className="form__label">Experiences</p>
          {formData.experiences.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input
                    type="date"
                    name={`experiences[${index}].startingDate`}
                    value={item.startingDate}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div>
                  <p className="form__label">Ending Date</p>
                  <input
                    type="date"
                    name={`experiences[${index}].endingDate`}
                    value={item.endingDate}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <p className="form__label">Position</p>
                  <input
                    type="text"
                    name={`experiences[${index}].position`}
                    value={item.position}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div>
                  <p className="form__label">Hospital</p>
                  <input
                    type="text"
                    name={`experiences[${index}].hospital`}
                    value={item.hospital}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>
              </div>

              <button
                type="button"
                className="p-2 text-white bg-red-500 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button type="button" className="px-5 py-2 text-white rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer">
            Add Experience
          </button>
        </div>

        {/* Time Slots */}
        <div className="mb-5">
          <p className="form__label">Time Slots</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <p className="form__label">Day*</p>
                  <select
                    name={`timeSlots[${index}].day`}
                    value={item.day}
                    onChange={handleInputChange}
                    className="form__input py-3.5"
                  >
                    <option value="">Select</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                  </select>
                </div>
                <div>
                  <p className="form__label">Starting Time*</p>
                  <input
                    type="time"
                    name={`timeSlots[${index}].startingTime`}
                    value={item.startingTime}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div>
                  <p className="form__label">Ending Time*</p>
                  <input
                    type="time"
                    name={`timeSlots[${index}].endingTime`}
                    value={item.endingTime}
                    onChange={handleInputChange}
                    className="form__input"
                  />
                </div>

                <div className="flex items-center">
                  <button
                    type="button"
                    className="p-2 text-white bg-red-500 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="px-5 py-2 text-white rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer">
            Add Time Slot
          </button>
        </div>

        <div className="mb-5">
          <p className='form_label'>About</p>
          <textarea name="about" rows={5} value={formData.about} placeholder='write about you' onChange={handleInputChange} className='form__input'></textarea>
        </div>

        <div className="flex items-center gap-3 mb-5"></div>
      </form>
    </div>
  );
};

export default Profile;
