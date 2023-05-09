import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
  });
  const AddUser = async () => {
    await axios.post('https://6459f55795624ceb21f36cbc.mockapi.io/admin', userData);
    navigate('/');
  };

  console.warn('ssa', userData);
  return (
    <div className='container'>
      <div class='mb-3 '>
        <label for='exampleFormControlInput1' class='form-label'>
          Name
        </label>
        <input
          name='first_name'
          value={userData.first_name}
          onChange={(data) => {
            setUserData({ ...userData, first_name: data.target.value });
          }}
          type='text'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='Name'
        />
      </div>

      <div class='mb-3 '>
        <label for='exampleFormControlInput1' class='form-label'>
          Last Name
        </label>
        <input
          name='last_name'
          value={userData.last_name}
          onChange={(data) => {
            setUserData({ ...userData, last_name: data.target.value });
          }}
          type='text'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='Name'
        />
      </div>

      <div class='mb-3'>
        <label for='exampleFormControlInput1' class='form-label'>
          age
        </label>
        <input
          name='age'
          value={userData.age}
          onChange={(data) => {
            setUserData({ ...userData, age: data.target.value });
          }}
          type='text'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>

      <button onClick={AddUser} type='button' class='btn btn-primary w-100'>
        Create Data
      </button>
    </div>
  );
}

export default Add;
