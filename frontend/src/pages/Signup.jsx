import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [role, setRole] = useState(''); // Store whether the user is a doctor or patient
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [specialization, setSpecialization] = useState(''); // Doctor's specialization
  const [hospitalName, setHospitalName] = useState(''); // Doctor's hospital name
  const [proof, setProof] = useState(null); // Proof document for doctors
  const [profilePic, setProfilePic] = useState(null); // Profile picture for users

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here, based on the selected role
    if (role === 'doctor') {
      console.log('Doctor Registration submitted', {
        name,
        email,
        password,
        confirmPassword,
        contactNumber,
        age,
        gender,
        specialization,
        hospitalName,
        proof,
      });
    } else {
      console.log('Patient Registration submitted', {
        name,
        email,
        password,
        confirmPassword,
        contactNumber,
        age,
        gender,
        address,
        profilePic,
      });
    }
  };

  const handleProofChange = (e) => {
    setProof(e.target.files[0]); // Store the selected proof file
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]); // Store the selected profile picture
  };

  return (
    <div className="whole">
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-heading">Register</h2>

          {/* Role Selection */}
          <div className="form-group">
            <label>Register as</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Common Fields for Both Doctor and Patient */}
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input 
              type="tel" 
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Conditional Fields for Doctor Registration */}
          {role === 'doctor' && (
            <>
              <div className="form-group">
                <label>Specialization</label>
                <input 
                  type="text" 
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Hospital Name</label>
                <input 
                  type="text" 
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Proof (Certificate)</label>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleProofChange}
                  required
                />
              </div>
            </>
          )}

          {/* Conditional Fields for Patient Registration */}
          {role === 'patient' && (
            <>
              <div className="form-group">
                <label>Address</label>
                <textarea 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Profile Picture</label>
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg"
                  onChange={handleProfilePicChange}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn auth-btn">Register</button>
          <p>
            Already have an account? <Link to="/login" className="auth-link">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
