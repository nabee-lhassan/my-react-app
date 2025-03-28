import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

    });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const allUsers = await axios.get('https://67dc8ab9e00db03c40685892.mockapi.io//users');
      const userExists = allUsers.data.some(user => (user.email === formData.email));
      if (userExists) {
        alert('Email already existed ')
      }
      else {

        const response = await axios.post('https://67dc8ab9e00db03c40685892.mockapi.io//users', formData);
        console.log('Response:', response.data);
        alert('User Created Successfully!');
        setFormData({ name: '', lastname: '', email: '', password: '' }); // Clear form

      }


    } catch (error) {
      console.error('Error:', error);
      alert('Error Creating User');
    }
  };


  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter First Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

     
    </div>
  );
};

export default SignupForm;
